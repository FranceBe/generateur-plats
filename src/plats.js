export const plats = [
    'Spaghettis Bolognaise',
    'Pâtes à la carbonara',
    'Poulet curry',
    'Poêlée de légume et filet de boeuf',
    'Steak haricots verts',
    'Risotto',
    'Blanquette',
    'Blancs de Poulets et petits légumes',
    'Epinards et poisson',
    'Pizza',
    'Poisson Riz',
    'Burger',
    'Sushis',
    'Tomate Mozza',
    'Salade',
    'Raviolis',
    'Pâtes au saumon'
]

export const getRandomRecipe = (platActuel) => {
    const newPlats = plats.slice()

    if (platActuel) {
        const index = newPlats.indexOf(platActuel)
        newPlats.splice(index, 1)
    }

    const random = Math.floor(Math.random() * newPlats.length)
    return plats[random];
}
