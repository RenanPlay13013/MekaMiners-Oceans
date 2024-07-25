ItemEvents.tooltip(tooltips =>{
//seting placeholder for change color
const changecolor = '§eVocê pode trocar a cor deste item com algum corante';
//adding tooltips for refined colorable blocks 
tooltips.add([
'refinedstorage:grid',
'refinedstorage:crafting_grid',
'refinedstorage:pattern_grid',
'refinedstorage:fluid_grid',
'refinedstorage:controller',
'refinedstorage:creative_controller',
'refinedstorage:network_receiver',
'refinedstorage:network_transmitter',
'refinedstorage:relay',
'refinedstorage:detector',
'refinedstorage:security_manager',
'refinedstorage:disk_manipulator',
'refinedstorage:crafter',
'refinedstorage:crafter_manager',
'refinedstorage:crafting_monitor'
],  `${changecolor}`)
//adding tooltip for MekaFood
const mekafoodtooltip = '§eA Comida Perfeita para um Mergulhador';
tooltips.add([
    'mekamod:tablist'
], `${mekafoodtooltip}`)

tooltips.add("#mekaminersbras Item Banido X"§c❌ Item Banido ❌");
})