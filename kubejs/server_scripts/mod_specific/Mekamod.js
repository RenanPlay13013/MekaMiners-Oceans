ServerEvents.recipes(event =>{ 
    event.remove({output: "mekamod:meka_sword"})
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "      AAA",
          "     AAAA",
          "    AAAAA",
          " B AACAA ",
          " BBDEAA  ",
          "  BFGA   ",
          " BHBB    ",
          "BHB BB   ",
          "HB       "
        ],
        "key": {
          "A": {
            "item": "mekamod:meka_ingot"
          },
          "B": {
            "item": "minecraft:oak_log"
          },
          "C": {
            "item": "mekaweapons:mekatana"
          },
          "D": {
            "type": "forge:nbt",
            "item": "wstweaks:lava_blade",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "E": {
            "item": "mysticalagriculture:awakened_supremium_sword"
          },
          "F": {
            "type": "forge:nbt",
            "item": "mythicbotany:alfsteel_sword",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "G": {
            "type": "forge:nbt",
            "item": "wstweaks:blaze_blade",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "H": {
            "item": "allthemodium:allthemodium_rod"
          }
        },
        "result": {
            "type": "forge:nbt",
            "item": "mekamod:meka_sword",
            "count": 1,
            "nbt": "{Damage:0}"
          }
      }).id('mekaminers:create_final_fase/meka_sword')
      event.remove({output:"mekamod:meka_pickaxe"})
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "   AAAA  ",
          "    AABA ",
          "     CDEA",
          "    CFCAA",
          "   CFC AA",
          "  CFC   A",
          " CFC     ",
          "CFC      ",
          "FC       "
        ],
        "key": {
          "A": {
            "item": "mekamod:meka_ingot"
          },
          "B": {
            "item": "allthemodium:unobtainium_pickaxe"
          },
          "C": {
            "item": "minecraft:oak_log"
          },
          "D": {
            "item": "mysticalagriculture:awakened_supremium_pickaxe"
          },
          "E": {
            "type": "forge:nbt",
            "item": "forbidden_arcanus:draco_arcanus_pickaxe",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "F": {
            "item": "allthemodium:allthemodium_rod"
          }
        },
        "result": {
            "type": "forge:nbt",
            "item": "mekamod:meka_pickaxe",
            "count": 1,
            "nbt": "{Damage:0}"
          }
      }).id('mekaminers:create_final_fase/meka_pickaxe')
      event.remove({output:"mekamod:meka_axe"})
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "    AA   ",
          "   AAAA  ",
          "  AABCA  ",
          "  AADEA  ",
          "   FAAAA ",
          "  FGF A  ",
          " FGF     ",
          "FGF      ",
          "GF       "
        ],
        "key": {
          "A": {
            "item": "mekamod:meka_ingot"
          },
          "B": {
            "type": "forge:nbt",
            "item": "botania:manasteel_axe",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "C": {
            "item": "mysticalagriculture:awakened_supremium_axe"
          },
          "D": {
            "type": "forge:nbt",
            "item": "ae2:fluix_axe",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "E": {
            "item": "allthemodium:unobtainium_axe"
          },
          "F": {
            "item": "minecraft:oak_log"
          },
          "G": {
            "item": "allthemodium:allthemodium_rod"
          }
        },
        "result": {
            "type": "forge:nbt",
            "item": "mekamod:meka_axe",
            "count": 1,
            "nbt": "{Damage:0}"
          }
      }).id('mekaminers:create_final_fase/meka_axe')
      event.remove({output:"mekamod:meka_shovel"})
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "      AA ",
          "     ABAA",
          "    AACDA",
          "    EAAA ",
          "   EFEA  ",
          "  EFE    ",
          " EFE     ",
          "EFE      ",
          "FE       "
        ],
        "key": {
          "A": {
            "item": "mekamod:meka_ingot"
          },
          "B": {
            "type": "forge:nbt",
            "item": "forbidden_arcanus:draco_arcanus_shovel",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "C": {
            "item": "mysticalagriculture:awakened_supremium_shovel"
          },
          "D": {
            "item": "allthemodium:unobtainium_shovel"
          },
          "E": {
            "item": "minecraft:oak_log"
          },
          "F": {
            "item": "allthemodium:allthemodium_rod"
          }
        },
        "result": {
            "type": "forge:nbt",
            "item": "mekamod:meka_shovel",
            "count": 1,
            "nbt": "{Damage:0}"
          }
      }).id('mekaminers:create_final_fase/meka_shovel')
      event.remove({output:"mekamod:meka_hoe"})
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "   ABA   ",
          "   AACA  ",
          "     ADA ",
          "    EFAA ",
          "   EFE   ",
          "  EFE    ",
          " EFE     ",
          "EFE      ",
          "FE       "
        ],
        "key": {
          "A": {
            "item": "mekamod:meka_ingot"
          },
          "B": {
            "item": "allthemodium:unobtainium_hoe"
          },
          "C": {
            "type": "forge:nbt",
            "item": "forbidden_arcanus:draco_arcanus_hoe",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "D": {
            "item": "mysticalagriculture:awakened_supremium_hoe"
          },
          "E": {
            "item": "minecraft:oak_log"
          },
          "F": {
            "item": "allthemodium:allthemodium_rod"
          }
        },
        "result": {
            "type": "forge:nbt",
            "item": "mekamod:meka_hoe",
            "count": 1,
            "nbt": "{Damage:0}"
          }
      }).id('mekaminers:create_final_fase/meka_hoe')
      event.remove({output:"mekamod:meka_armor_helmet"})
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          " ABBCBBD ",
          "BBBEBFBBB",
          "BBB G BBB",
          "BB     BB",
          "BB     BB",
          "B       B",
          "         ",
          "         ",
          "         "
        ],
        "key": {
          "A": {
            "type": "forge:nbt",
            "item": "forbidden_arcanus:draco_arcanus_helmet",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "B": {
            "item": "mekamod:meka_ingot"
          },
          "C": {
            "type": "forge:nbt",
            "item": "bloodmagic:livinghelmet",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "D": {
            "type": "forge:nbt",
            "item": "deeperdarker:warden_helmet",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "E": {
            "type": "forge:nbt",
            "item": "mythicbotany:alfsteel_helmet",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "F": {
            "item": "allthemodium:unobtainium_helmet"
          },
          "G": {
            "type": "forge:nbt",
            "item": "mysticalagriculture:awakened_supremium_helmet",
            "count": 1,
            "nbt": "{Damage:0}"
          }
        },
        "result": {
            "type": "forge:nbt",
            "item": "mekamod:meka_armor_helmet",
            "count": 1,
            "nbt": "{Damage:0,SimpleInsulation:[]}"
          }
      }).id('mekaminers:create_final_fase/meka_armor_helmet')
      event.remove({output:"mekamod:meka_armor_chestplate"})
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "         ",
          "         ",
          "  A   A  ",
          " AAA AAA ",
          " AAABAAA ",
          "  ACADA  ",
          "  AEFGA  ",
          "  AAAAA  ",
          "   AAA   "
        ],
        "key": {
          "A": {
            "item": "mekamod:meka_ingot"
          },
          "B": {
            "type": "forge:nbt",
            "item": "mysticalagriculture:awakened_supremium_chestplate",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "C": {
            "type": "forge:nbt",
            "item": "forbidden_arcanus:draco_arcanus_chestplate",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "D": {
            "item": "allthemodium:unobtainium_chestplate"
          },
          "E": {
            "type": "forge:nbt",
            "item": "mythicbotany:alfsteel_chestplate",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "F": {
            "type": "forge:nbt",
            "item": "deeperdarker:warden_chestplate",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "G": {
            "type": "forge:nbt",
            "item": "bloodmagic:livingplate",
            "count": 1,
            "nbt": "{Damage:0,livingStats:{maxPoints:100,upgrades:[]}}"
          }
        },
        "result": {
            "type": "forge:nbt",
            "item": "mekamod:meka_armor_chestplate",
            "count": 1,
            "nbt": "{Damage:0,SimpleInsulation:[]}"
          }
      }).id('mekaminers:create_final_fase/meka_armor_chestplate')
      event.remove({output:"mekamod:meka_armor_leggings"})
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "         ",
          "         ",
          " AAABAAA ",
          " AAACAAA ",
          " AA   AA ",
          " DA   AE ",
          " AF   GA ",
          " AA   AA ",
          " AA   AA "
        ],
        "key": {
          "A": {
            "item": "mekamod:meka_ingot"
          },
          "B": {
            "type": "forge:nbt",
            "item": "mysticalagriculture:awakened_supremium_leggings",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "C": {
            "type": "forge:nbt",
            "item": "deeperdarker:warden_leggings",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "D": {
            "type": "forge:nbt",
            "item": "mythicbotany:alfsteel_leggings",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "E": {
            "type": "forge:nbt",
            "item": "forbidden_arcanus:draco_arcanus_leggings",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "F": {
            "item": "allthemodium:unobtainium_leggings"
          },
          "G": {
            "type": "forge:nbt",
            "item": "bloodmagic:livingleggings",
            "count": 1,
            "nbt": "{Damage:0}"
          }
        },
        "result": {
            "type": "forge:nbt",
            "item": "mekamod:meka_armor_leggings",
            "count": 1,
            "nbt": "{Damage:0,SimpleInsulation:[]}"
          }
      }).id('mekaminers:create_final_fase/meka_armor_leggings')
      event.remove({output:"mekamod:meka_armor_boots"})
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "         ",
          "         ",
          "         ",
          "         ",
          "  AABAA  ",
          "  ACDEA  ",
          "  FA AG  ",
          " AAA AAA ",
          " AAA AAA "
        ],
        "key": {
          "A": {
            "item": "mekamod:meka_ingot"
          },
          "B": {
            "type": "forge:nbt",
            "item": "mysticalagriculture:awakened_supremium_boots",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "C": {
            "type": "forge:nbt",
            "item": "bloodmagic:livingboots",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "D": {
            "item": "allthemodium:unobtainium_boots"
          },
          "E": {
            "type": "forge:nbt",
            "item": "forbidden_arcanus:draco_arcanus_boots",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "F": {
            "type": "forge:nbt",
            "item": "deeperdarker:warden_boots",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "G": {
            "type": "forge:nbt",
            "item": "mythicbotany:alfsteel_boots",
            "count": 1,
            "nbt": "{Damage:0}"
          }
        },
        "result": {
            "type": "forge:nbt",
            "item": "mekamod:meka_armor_boots",
            "count": 1,
            "nbt": "{Damage:0,SimpleInsulation:[]}"
          }
      }).id('mekaminers:create_final_fase/meka_armor_boots')
      event.remove({output:"mekamod:meka_paxel"})
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "    A    ",
          "   AAA   ",
          "  AABCA  ",
          "   ADEFA ",
          "   GHIJAA",
          "  GHGAAA ",
          " GHG  A  ",
          "GHG      ",
          "HG       "
        ],
        "key": {
          "A": {
            "item": "mekamod:meka_ingot"
          },
          "B": {
            "type": "forge:nbt",
            "item": "stalwart_dungeons:nether_hammer",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "C": {
            "type": "forge:nbt",
            "item": "mekamod:meka_pickaxe",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "D": {
            "type": "forge:nbt",
            "item": "mekamod:meka_shovel",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "E": {
            "item": "mysticalagradditions:awakened_supremium_paxel"
          },
          "F": {
            "type": "forge:nbt",
            "item": "mekamod:meka_axe",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "G": {
            "item": "minecraft:oak_log"
          },
          "H": {
            "item": "allthemodium:allthemodium_rod"
          },
          "I": {
            "type": "forge:nbt",
            "item": "mekamod:meka_hoe",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "J": {
            "type": "forge:nbt",
            "item": "stalwart_dungeons:netherite_hammer",
            "count": 1,
            "nbt": "{Damage:0}"
          }
        },
        "result": {
            "type": "forge:nbt",
            "item": "mekamod:meka_paxel",
            "count": 1,
            "nbt": "{Damage:0}"
          }
      }).id('mekaminers:create_final_fase/meka_paxel')
      event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
          {
            "item": "botania:mana_cookie"
          }
        ],
        "output": [
          {
            "item": "mekamod:tablist"
          }
        ]
      }).id('mekaminers:create_final_fase/tablist')
      //event.remove({output:""})
      //event.custom().id('mekaminers:create_final_fase/machine_efficiency_creative_augment')
})
