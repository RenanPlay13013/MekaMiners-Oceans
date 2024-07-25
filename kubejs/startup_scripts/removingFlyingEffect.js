MoreJSEvents.registerPotionBrewing((event) => {
    event.removeByPotion(null,null,"apotheosis:flying");
})
WorldgenEvents.remove(event => {
    event.removeOres(props => {
        // much like ADDING ores, this supports filtering by worldgen layer...
        props.worldgenLayer = 'underground_ores'
        // ...and by biome
    
        // BlockStatePredicate to remove iron and copper ores from the given biomes
        // Note tags may NOT be used here, unfortunately...
        props.blocks = ['mekamod:deepslate_meka_ore', 'mekamod:meka_ore']
      })
    })