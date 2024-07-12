ServerEvents.recipes(event =>{ 
    event.custom(
    {"type": "botania:mana_infusion",
    "input": {"item": "extendedcrafting:ultimate_singularity"},
    "mana": 500000,
    "output": {"amount": 8,"item": "extendedcrafting:the_ultimate_ingot"}
}).id('mekaminers:create_fase_4/the_ultimate_ingot')
//The ultimate ingot
event.custom(
    {"type": "botania:mana_infusion",
    "input": {"item": "allthemodium:vibranium_allthemodium_alloy_dust"},
    "mana": 100000,
    "output": {"amount": 1,"item": "allthemodium:vibranium_allthemodium_alloy_ingot"}
}).id('mekaminers:create_fase_4/vibranium_allthemodium_alloy_ingot')
//Vibranium ingot
event.custom(
    {"type": "botania:mana_infusion",
    "input": {"item": "allthemodium:unobtainium_allthemodium_alloy_dust"},
    "mana": 100000,
    "output": {"amount": 1,"item": "allthemodium:unobtainium_allthemodium_alloy_ingot"}
}).id('mekaminers:create_fase_4/unobtainium_allthemodium_alloy_ingot')
//Unobtainium ingot
event.custom(
    {"type": "botania:mana_infusion",
    "input": {"item": "allthemodium:unobtainium_vibranium_alloy_dust"},
    "mana": 100000,
    "output": {"amount": 1,"item": "allthemodium:unobtainium_vibranium_alloy_ingot"}
}).id('mekaminers:create_fase_4/unobtainium_vibranium_alloy_ingot')
//Unobitainium-Vibranium ingot
event.remove({output:"extendedcrafting:ultimate_singularity"})
event.custom(
    {
        "type": "create:mechanical_crafting",
        "pattern": [
          "         ",
          "ABCDEFGHI",
          "JCKCLMMNO",
          "PNCQRQMNS",
          "TNUVWXYNZ",
          "aNMQbQCNc",
          "dNMMeCfCJ",
          "ghijklCAB",
          "         "
        ],
        "key": {
          "A": {
            "item": "allthemodium:unobtainium_crystal"
          },
          "B": {
            "item": "allthemodium:vibranium_crystal"
          },
          "C": {
            "item": "powah:crystal_nitro"
          },
          "D": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:lapis_lazuli\"}"
          },
          "E": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:emerald\"}"
          },
          "F": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:steel\"}"
          },
          "G": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:redstone\"}"
          },
          "H": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:aluminum\"}"
          },
          "I": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:silver\"}"
          },
          "J": {
            "item": "allthemodium:allthemodium_crystal"
          },
          "K": {
            "item": "allthemodium:unobtainium_vibranium_alloy_ingot"
          },
          "L": {
            "item": "allthemodium:molten_vibranium_bucket"
          },
          "M": {
            "item": "botania:gaia_ingot"
          },
          "N": {
            "item": "powah:crystal_spirited"
          },
          "O": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:tin\"}"
          },
          "P": {
            "item": "bloodmagic:bloodlightsigil"
          },
          "Q": {
            "item": "bloodmagic:weakbloodshard"
          },
          "R": {
            "item": "extendedcrafting:flux_star"
          },
          "S": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:electrum\"}"
          },
          "T": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:invar\"}"
          },
          "U": {
            "item": "allthemodium:molten_allthemodium_bucket"
          },
          "V": {
            "item": "extendedcrafting:enhanced_ender_ingot"
          },
          "W": {
            "item": "extendedcrafting:crystaltine_ingot"
          },
          "X": {
            "item": "extendedcrafting:enhanced_redstone_ingot"
          },
          "Y": {
            "item": "allthemodium:soul_lava_bucket"
          },
          "Z": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:bronze\"}"
          },
          "a": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:glowstone\"}"
          },
          "b": {
            "item": "extendedcrafting:ender_star"
          },
          "c": {
            "item": "bloodmagic:telepositionsigil"
          },
          "d": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:gold\"}"
          },
          "e": {
            "item": "allthemodium:molten_unobtainium_bucket"
          },
          "f": {
            "item": "allthemodium:unobtainium_allthemodium_alloy_ingot"
          },
          "g": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:diamond\"}"
          },
          "h": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:platinum\"}"
          },
          "i": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:copper\"}"
          },
          "j": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:iron\"}"
          },
          "k": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:lead\"}"
          },
          "l": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:nickel\"}"
          }
        },
        "result": {
          "item": "extendedcrafting:ultimate_singularity"
        }
      }
).id('mekaminers:create_fase_4/ultimate_singularity')
event.remove({output:
  "extendedcrafting:crystaltine_ingot"
})
event.custom(
  {
    "type": "create:mechanical_crafting",
    "pattern": [
      "         ",
      "AAAAAAAAA",
      "BCCDEDFGB",
      "BCDDHDDIB",
      "BJEKLMENB",
      "BODDHDDCB",
      "BGPDEDCCB",
      "AAAAAAAAA",
      "         "
    ],
    "key": {
      "A": {
        "item": "bigreactors:insanite_ingot"
      },
      "B": {
        "item": "minecraft:diamond_block"
      },
      "C": {
        "item": "bigreactors:inanite_ingot"
      },
      "D": {
        "item": "mysticalagradditions:insanium_ingot"
      },
      "E": {
        "item": "rftoolsbase:infused_diamond"
      },
      "F": {
        "item": "allthemodium:vibranium_allthemodium_alloy_dust"
      },
      "G": {
        "item": "mythicbotany:alfsteel_ingot"
      },
      "H": {
        "item": "extendedcrafting:nether_star_block"
      },
      "I": {
        "item": "allthemodium:unobtainium_vibranium_alloy_dust"
      },
      "J": {
        "item": "allthemodium:dirty_unobtainium_dust"
      },
      "K": {
        "item": "extendedcrafting:flux_star"
      },
      "L": {
        "item": "mekanism:pellet_antimatter"
      },
      "M": {
        "item": "extendedcrafting:ender_star"
      },
      "N": {
        "item": "allthemodium:unobtainium_allthemodium_alloy_dust"
      },
      "O": {
        "item": "allthemodium:dirty_vibranium_dust"
      },
      "P": {
        "item": "allthemodium:dirty_allthemodium_dust"
      }
    },
    "result": {
      "item": "extendedcrafting:crystaltine_ingot"
    }
  }
).id('mekaminers:create_creative_fase/crystaltine_ingot')
})