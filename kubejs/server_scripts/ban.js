ServerEvents.recipes(event =>{
    const ban = [
    'thermal:fire_tnt',
     'thermal:ice_tnt', 
     'thermal:lightning_tnt', 
     'thermal:earth_tnt', 
     'thermal:ender_tnt', 
     'mekanism:upgrade_anchor',
     'thermal:glowstone_tnt', 
     'thermal:redstone_tnt',
     'mekanism:module_gravitational_modulating_unit',
     'rftoolsutility:flight_module',
     'mysticalagriculture:flight_augment',
     'forbidden_arcanus:orb_of_temporary_flight',
     'thermal:redstone_grenade',
     'ae2:matter_cannon',
     'industrialforegoing:infinity_nuke',
     'buildinggadgets2:gadget_exchanging',
     'buildinggadgets2:gadget_building',
     'buildinggadgets2:gadget_copy_paste', 
     'buildinggadgets2:gadget_cut_paste',
     'ae2wtlib:quantum_bridge_card',
     'industrialforegoing:infinity_launcher', 
     'immersiveengineering:cloche', 
     'thermal:slime_grenade', 
     'thermal:phyto_grenade', 
     'thermal:nuke_grenade', 
     'thermal:explosive_grenade',
     'thermal:fire_grenade', 
     'thermal:ice_grenade',
     'thermal:lightning_grenade', 
     'thermal:earth_grenade',
     'thermal:ender_grenade', 
     'thermal:glowstone_grenade',
     'thermal:slime_tnt',
     'thermal:nuke_tnt',
     'thermal:phyto_tnt',
     'botania:spawner_mover',
     'useless_sword:ender_catalyst_sword',
     'thermal:satchel',
     'occulstism:satchel',
     'mekanism:cardboard_box', 
     'ae2:spatial_cell_component_2', 
     'ae2:spatial_cell_component_16', 
     'ae2:spatial_cell_component_128', 
     'ae2:spatial_storage_cell_2', 
     'ae2:spatial_storage_cell_16', 
     'ae2:spatial_storage_cell_128', 
     'ae2:spatial_pylon', 
     'ae2:spatial_io_port', 
     'ae2:spatial_anchor', 
     'megacells:bulk_cell_component',
     'megacells:bulk_item_cell',
     'reliquary:rod_of_lyssa',
     'buildinggadgets2:gadget_destruction',
     'create:schematicannon',
     'create:schematic_table',
     'create:crafting_blueprint',
     'create:empty_schematic',
     'create:schematic_and_quill',
     'botania:laputa_shard',
     'pneumaticcraft:elytra_upgrade',
     
        ]
    ban.forEach(banidos =>{
        event.remove({output:`${banidos}`})
    })
    const meka = [
        'mekamod:mekaoretoingot',
        'mekamod:rawtoingot',
        'mekamod:meka_ore_smelting',
        'mekamod:mekaorevarianttoingot',
        'thermal:furnace_1959083843',
        'thermal:furnace_1766866962',
        'thermal:furnace_1545671079',
        'thermal:furnace_646648820'
    ]
    meka.forEach(banmeka => {
    event.remove({id: `${banmeka}`})
})

//Gold Coin 
event.remove({id:'thermal:machines/press/press_gold_ingot_to_coin'})
event.remove({id:'thermal:machines/press/press_gold_nugget_to_coin'})

//Dreadsteel and angelring mod
event.remove({mod:'dreadsteel'})
event.remove({mod:'angelring'})
})
