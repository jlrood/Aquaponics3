export const FISH_STAGES = [
    { id: 'tilapiaLarvae', nextId: 'tilapiaFingerling', weeks: 1 },
    { id: 'tilapiaFingerling', nextId: 'tilapiaJuvenile', weeks: 2 },
    { id: 'tilapiaJuvenile', nextId: 'tilapiaAdult', weeks: 2 }
]

export const PLANT_STAGES = [
    { id: 'romaineSprout', nextId: 'romaineSeedling', weeks: 1 },
    { id: 'romaineSeedling', nextId: 'romaineHead', weeks: 2 }
]

export default class AgingSystem {
    constructor(scene) {
        this.scene = scene;
        this.registry = scene.registry;
    }

    advanceWeek() {
        this.ageFish();
        this.agePlants();
    }

    ageFish() {
        const items = this.registry.get('items') || []
        const ages = this.registry.get('fishAges') || {}

        FISH_STAGES.forEach(rule => {
            const count = this.getItemCount(items, rule.id)
            if (!count) return

            const key = rule.id
            const current = ages[key] || 0
            ages[key] = current + 1
        })

        FISH_STAGES.forEach(rule => {
            const key = rule.id
            const age = ages[key] || 0
            if (age < rule.weeks) return

            this.convertItems(items, rule.id, rule.nextId)
            ages[key] = 0
        })

        this.registry.set('items', items)
        this.registry.set('fishAges', ages)
    }

    agePlants() {
        const items = this.registry.get('items') || []
        const ages = this.registry.get('plantAges') || {}

        PLANT_STAGES.forEach(rule => {
            const count = this.getItemCount(items, rule.id)
            if (!count) return

            const key = rule.id
            const current = ages[key] || 0
            ages[key] = current + 1
        })

        PLANT_STAGES.forEach(rule => {
            const key = rule.id
            const age = ages[key] || 0
            if (age < rule.weeks) return

            this.convertItems(items, rule.id, rule.nextId)
            ages[key] = 0
        })

        this.registry.set('items', items)
        this.registry.set('plantAges', ages)

        let plantBed = this.registry.get('plantBed')
        if (!Array.isArray(plantBed)) return

        for (let r = 0; r < plantBed.length; r++) {
            for (let c = 0; c < plantBed[r].length; c++) {
                const cell = plantBed[r][c]
                if (!cell) continue

                if (!cell.id) continue

                const rule = PLANT_STAGES.find(p => p.id === cell.id)
                if (!rule) continue

                if (typeof cell.weeksInStage !== 'number') {
                    cell.weeksInStage = 0
                }

                cell.weeksInStage += 1

                if (cell.weeksInStage >= rule.weeks) {
                    cell.id = rule.nextId
                    cell.weeksInStage = 0

                    if (cell.id === 'romaineSprout') {
                        cell.stage = 'sprout'
                    } else if (cell.id === 'romaineSeedling') {
                        cell.stage = 'seedling'
                    } else if (cell.id === 'romaineHead') {
                        cell.stage = 'head'
                    }
                } else {
                    // still in the same stage
                    if (cell.id === 'romaineSprout') {
                        cell.stage = 'sprout'
                    } else if (cell.id === 'romaineSeedling') {
                        cell.stage = 'seedling'
                    }
                }
            }
        }

        this.registry.set('plantBed', plantBed)
    }


    // helper funcs

    getItemCount(items, id) {
        const it = items.find(i => i.id === id)
        if (!it) return 0
        return typeof it.playerHas === 'number' ? it.playerHas : 0
    }

    convertItems(items, fromId, toId) {
        if (fromId === toId) return

        const from = items.find(i => i.id === fromId)
        if (!from || !from.playerHas) return

        let to = items.find(i => i.id === toId)
        if (!to) {
            to = {
                id: toId,
                name: toId,
                price: 0,
                playerHas: 0
            }
            items.push(to)
        }

        to.playerHas += from.playerHas
        from.playerHas = 0
    }
}