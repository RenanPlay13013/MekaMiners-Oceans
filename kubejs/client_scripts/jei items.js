JEIEvents.hideItems(event =>{
   const colors = ['white', 'light_gray', 'gray', 'black', 'brown', 'red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink'];
   // const bucketPattern = /gtceu:.*_bucket/;
   colors.forEach(color => {
    //Removing Refined Storage Colored blocks From JEI
    event.hide(`refinedstorage:${color}_grid`);
    event.hide(`refinedstorage:${color}_crafting_grid`);
    event.hide(`refinedstorage:${color}_pattern_grid`); 
    event.hide(`refinedstorage:${color}_fluid_grid`); 
    event.hide(`refinedstorage:${color}_controller`); 
    event.hide(`refinedstorage:${color}_creative_controller`); 
    event.hide(`refinedstorage:${color}_network_receiver`); 
    event.hide(`refinedstorage:${color}_network_transmitter`); 
    event.hide(`refinedstorage:${color}_relay`); 
    event.hide(`refinedstorage:${color}_detector`); 
    event.hide(`refinedstorage:${color}_security_manager`); 
    event.hide(`refinedstorage:${color}_disk_manipulator`); 
    event.hide(`refinedstorage:${color}_crafter`); 
    event.hide(`refinedstorage:${color}_crafter_manager`); 
    event.hide(`refinedstorage:${color}_crafting_monitor`); 
    event.hide(`refinedstorage:${color}_wireless_transmitter`);
    event.hide(`enderio:${color}_clear_glass`); 
});
    //Removing Flying Effect From JEI
   /* const flyingeffect = [
   Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"apotheosis:flying"}'), 
   Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"apotheosis:long_flying"}'),
   Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"apotheosis:extra_long_flying"}'), 
   Item.of('minecraft:tipped_arrow', '{Potion:"apotheosis:flying"}'),
   Item.of('minecraft:tipped_arrow', '{Potion:"apotheosis:long_flying"}'),
   Item.of('minecraft:tipped_arrow', '{Potion:"apotheosis:extra_long_flying"}'), 
   Item.of('minecraft:potion', '{Potion:"apotheosis:flying"}'),
   Item.of('minecraft:potion', '{Potion:"apotheosis:extra_long_flying"}'),
   Item.of('minecraft:potion', '{Potion:"apotheosis:long_flying"}'),
   Item.of('minecraft:splash_potion', '{Potion:"apotheosis:flying"}'),
   Item.of('minecraft:splash_potion', '{Potion:"apotheosis:long_flying"}'),
   Item.of('minecraft:splash_potion', '{Potion:"apotheosis:extra_long_flying"}'), 
   Item.of('minecraft:lingering_potion', '{Potion:"apotheosis:flying"}'),
   Item.of('minecraft:lingering_potion', '{Potion:"apotheosis:long_flying"}'),
   Item.of('minecraft:lingering_potion', '{Potion:"apotheosis:extra_long_flying"}'),
   Item.of('immersiveengineering:potion_bucket', '{Potion:"apotheosis:extra_long_flying"}')
];
   flyingeffect.forEach(flyeffect =>{
   event.hide(flyeffect);
}); */
   //Removing Easy NPCS Itens From JEI 
   event.hide('@easy_npc');
   //Removing Operator Itens From JEI
  const OperatorsI = [
   'minecraft:command_block',
   'minecraft:chain_command_block',
   'minecraft:repeating_command_block', 
   'minecraft:jigsaw',
   'minecraft:structure_block',
   'minecraft:structure_void',
   'minecraft:barrier',
   'minecraft:debug_stick',
   'minecraft:light',
   'minecraft:command_block_minecart',
];
OperatorsI.forEach(OpI =>{
   event.hide(OpI);
});
//Removing ban itens
event.hide('@buildinggadgets')
//Hidding Rage Glove
event.hide('relics:rage_glove')

//Removing Incomplete mechanisms

const incomplete = [
   'kubejs:incomplete_started_mechanism',
   'kubejs:incomplete_started_mechanism_component_2',
   'kubejs:incomplete_started_mechanism_component_3',
   'kubejs:incomplete_started_mechanism_component_4',
   'kubejs:incomplete_start_mechanism',
   'kubejs:incomplete_vibranium_allthemodium_alloy_dust',
   'kubejs:incomplete_unobtainium_allthemodium_alloy_dust',
   'kubejs:incomplete_unobtainium_vibranium_alloy_dust',
   'kubejs:incomplete_precision_mechanism_component_2',
   'kubejs:incomplete_teprecision_mechanism',
   'kubejs:incomplete_precision_mechanism_component_1',
   'kubejs:incomplete_initiated_mechanism_component_2',
   'kubejs:incomplete_initiated_mechanism_component_1',
   'kubejs:incomplete_initiated_mechanism',
   'kubejs:incomplete_initiating_mechanism_component_1',
   'kubejs:incomplete_initiating_mechanism_component_2',
   'kubejs:incomplete_spatial_circuit_component_1',
   'kubejs:incomplete_spatial_circuit_component_2',
   'kubejs:incomplete_spatial_circuit',
   'kubejs:incomplete_activation_circuit_component_1',
   'kubejs:incomplete_activation_circuit_component_2',
   'kubejs:incomplete_activation_circuit',
   ]
   incomplete.forEach(INCOMPLETE => { 
       event.hide(INCOMPLETE)
   })
})