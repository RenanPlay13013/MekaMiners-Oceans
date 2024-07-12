ServerEvents.recipes(event =>{
    event.remove
    ({output:
        "ad_astra:tier_1_rocket"
    })
    event.custom(
        {
            "type": "ad_astra:nasa_workbench",
            "ingredients": [
              {
                "ingredient": {
                  "item": "ad_astra:rocket_nose_cone"
                }
              },
              {
                "ingredient": {
                  "item": "kubejs:initiating_mechanism"
                }
              },
              {
                "ingredient": {
                  "tag": "ad_astra_platform:steel_blocks"
                }
              },
              {
                "ingredient": {
                  "item": "kubejs:initiated_mechanism"
                }
              },
              {
                "ingredient": {
                  "item": "kubejs:initiated_mechanism"
                }
              },
              {
                "ingredient": {
                  "tag": "ad_astra_platform:steel_blocks"
                }
              },
              {
                "ingredient": {
                  "item": "kubejs:initiating_mechanism"
                }
              },
              {
                "ingredient": {
                  "item": "ad_astra:rocket_fin"
                }
              },
              {
                "ingredient": {
                  "item": "ad_astra:steel_tank"
                }
              },
              {
                "ingredient": {
                  "item": "ad_astra:steel_tank"
                }
              },
              {
                "ingredient": {
                  "item": "ad_astra:rocket_fin"
                }
              },
              {
                "ingredient": {
                  "item": "ad_astra:rocket_fin"
                }
              },
              {
                "ingredient": {
                  "item": "ad_astra:steel_engine"
                }
              },
              {
                "ingredient": {
                  "item": "ad_astra:rocket_fin"
                }
              }
            ],
            "output": "ad_astra:tier_1_rocket"
}).id('mekaminers:create_fase_spatial/tier_1_rocket')
event.remove
({output:
    "ad_astra:launch_pad"
}),
event.custom({
        "type": "minecraft:crafting_shaped",
        "group": "launch_pad",
        "key": {
          "1": {
            "tag": "ad_astra_platform:steel_plates"
          },
          "2": {
            "tag": "ad_astra_platform:iron_plates"
          },
          "3": {
            "item": "kubejs:initiated_mechanism"
          }
        },
        "pattern": [
          "121",
          "232",
          "121"
        ],
        "result": {
          "item": "ad_astra:launch_pad"
        }
}).id('mekaminers:create_fase_spatial/launch_pad')
event.remove({
    output:"ad_astra:tier_2_rocket"
})
event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
          {
            "ingredient": {
              "item": "ad_astra:rocket_nose_cone"
            }
          },
          {
            "ingredient": {
              "item": "kubejs:initiated_mechanism"
            }
          },
          {
            "ingredient": {
              "tag": "ad_astra_platform:desh_blocks"
            }
          },
          {
            "ingredient": {
              "item": "create:precision_mechanism"
            }
          },
          {
            "ingredient": {
              "item": "create:precision_mechanism"
            }
          },
          {
            "ingredient": {
              "tag": "ad_astra_platform:desh_blocks"
            }
          },
          {
            "ingredient": {
              "item": "kubejs:initiated_mechanism"
            }
          },
          {
            "ingredient": {
              "item": "ad_astra:rocket_fin"
            }
          },
          {
            "ingredient": {
              "item": "ad_astra:desh_tank"
            }
          },
          {
            "ingredient": {
              "item": "ad_astra:desh_tank"
            }
          },
          {
            "ingredient": {
              "item": "ad_astra:rocket_fin"
            }
          },
          {
            "ingredient": {
              "item": "ad_astra:rocket_fin"
            }
          },
          {
            "ingredient": {
              "item": "ad_astra:desh_engine"
            }
          },
          {
            "ingredient": {
              "item": "ad_astra:rocket_fin"
            }
          }
        ],
        "output": "ad_astra:tier_2_rocket"
}).id('mekaminers:create_fase_spatial/tier_2_rocket')
event.remove({
  output:"ad_astra:tier_3_rocket"
})
event.custom({
  "type": "ad_astra:nasa_workbench",
  "ingredients": [
    {
      "ingredient": {
        "item": "ad_astra:rocket_nose_cone"
      }
    },
    {
      "ingredient": {
        "item": "create:precision_mechanism"
      }
    },
    {
      "ingredient": {
        "tag": "ad_astra_platform:ostrum_blocks"
      }
    },
    {
      "ingredient": {
        "item": "kubejs:activation_circuit"
      }
    },
    {
      "ingredient": {
        "item": "kubejs:activation_circuit"
      }
    },
    {
      "ingredient": {
        "tag": "ad_astra_platform:ostrum_blocks"
      }
    },
    {
      "ingredient": {
        "item": "create:precision_mechanism"
      }
    },
    {
      "ingredient": {
        "item": "ad_astra:rocket_fin"
      }
    },
    {
      "ingredient": {
        "item": "ad_astra:ostrum_tank"
      }
    },
    {
      "ingredient": {
        "item": "ad_astra:ostrum_tank"
      }
    },
    {
      "ingredient": {
        "item": "ad_astra:rocket_fin"
      }
    },
    {
      "ingredient": {
        "item": "ad_astra:rocket_fin"
      }
    },
    {
      "ingredient": {
        "item": "ad_astra:ostrum_engine"
      }
    },
    {
      "ingredient": {
        "item": "ad_astra:rocket_fin"
      }
    }
  ],
  "output": "ad_astra:tier_3_rocket"
}).id('mekaminers:create_fase_spatial/tier_3_rocket')
event.remove({
  output:"ad_astra:tier_4_rocket"
})
event.custom({
  "type": "ad_astra:nasa_workbench",
  "ingredients": [
    {
      "ingredient": {
        "item": "ad_astra:rocket_nose_cone"
      }
    },
    {
      "ingredient": {
        "item": "kubejs:activation_circuit"
      }
    },
    {
      "ingredient": {
        "tag": "ad_astra_platform:calorite_blocks"
      }
    },
    {
      "ingredient": {
        "item": "kubejs:spatial_circuit"
      }
    },
    {
      "ingredient": {
        "item": "kubejs:spatial_circuit"
      }
    },
    {
      "ingredient": {
        "tag": "ad_astra_platform:calorite_blocks"
      }
    },
    {
      "ingredient": {
        "item": "kubejs:activation_circuit"
      }
    },
    {
      "ingredient": {
        "item": "ad_astra:rocket_fin"
      }
    },
    {
      "ingredient": {
        "item": "ad_astra:calorite_tank"
      }
    },
    {
      "ingredient": {
        "item": "ad_astra:calorite_tank"
      }
    },
    {
      "ingredient": {
        "item": "ad_astra:rocket_fin"
      }
    },
    {
      "ingredient": {
        "item": "ad_astra:rocket_fin"
      }
    },
    {
      "ingredient": {
        "item": "ad_astra:calorite_engine"
      }
    },
    {
      "ingredient": {
        "item": "ad_astra:rocket_fin"
      }
    }
  ],
  "output": "ad_astra:tier_4_rocket"
}).id('mekaminers:create_fase_spatial/tier_4_rocket')
event.custom({
  "type": "botania:elven_trade",
  "ingredients": [
    {
      "item": 'botania:tiny_planet'
    },
    {
      "item": 'minecraft:gold_block'
    },
    {
      "item": 'minecraft:grass_block'
    },
  ],
  "output": [
    {
      "item": "ad_astra:earth_globe"
    }
  ]
}).id('mekaminers:create_fase_spatial/earth_globe')
event.custom(
    {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAA    ",
          "A   A    ",
          "A  BBB   ",
          "A  CDC   ",
          "A  ECE   ",
          "A        ",
          "AAAAA    ",
          "    A    ",
          "   AAA   "
        ],
        "key": {
          "A": {
            "item": "minecraft:gold_block"
          },
          "B": {
            "item": "ad_astra:moon_cobblestone",
            "amount": 64
          },
          "C": {
            "item": "ad_astra:moon_stone",
            "amount": 64
          },
          "D": {
            "item": "botania:tiny_planet"
          },
          "E": {
            "item": "ad_astra:moon_sand",
            "amount": 64
          }
        },
        "result": {
          "item": "ad_astra:moon_globe"
        }
      }
).id('mekaminers:create_fase_spatial/moon_globe')
event.custom(
    {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAA    ",
          "A   A    ",
          "A  BBB   ",
          "A  CDC   ",
          "A  ECE   ",
          "A        ",
          "AAAAA    ",
          "    A    ",
          "   AAA   "
        ],
        "key": {
          "A": {
            "item": "minecraft:gold_block"
          },
          "B": {
            "item": "ad_astra:mars_cobblestone",
            "amount": 64
          },
          "C": {
            "item": "ad_astra:mars_stone",
            "amount": 64
          },
          "D": {
            "item": "botania:tiny_planet"
          },
          "E": {
            "item": "ad_astra:mars_sand",
            "amount": 64
          }
        },
        "result": {
          "item": "ad_astra:mars_globe"
        }
      }
).id('mekaminers:create_fase_spatial/mars_globe')
event.custom(
    {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAA    ",
          "A   A    ",
          "A  BBB   ",
          "A  CDC   ",
          "A  ECE   ",
          "A        ",
          "AAAAA    ",
          "    A    ",
          "   AAA   "
        ],
        "key": {
          "A": {
            "item": "minecraft:gold_block"
          },
          "B": {
            "item": "ad_astra:mercury_cobblestone",
            "amount": 64
          },
          "C": {
            "item": "ad_astra:mercury_stone",
            "amount": 64
          },
          "D": {
            "item": "botania:tiny_planet"
          },
          "E": {
            "item": "ad_astra:mercury_stone_bricks",
            "amount": 64
          }
        },
        "result": {
          "item": "ad_astra:mercury_globe"
        }
      }
).id('mekaminers:create_fase_spatial/mercury_globe')
event.custom(
    {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAA    ",
          "A   A    ",
          "A  BBB   ",
          "A  CDC   ",
          "A  ECE   ",
          "A        ",
          "AAAAA    ",
          "    A    ",
          "   AAA   "
        ],
        "key": {
          "A": {
            "item": "minecraft:gold_block"
          },
          "B": {
            "item": "ad_astra:venus_cobblestone",
            "amount": 64
          },
          "C": {
            "item": "ad_astra:venus_sandstone",
            "amount": 64
          },
          "D": {
            "item": "botania:tiny_planet"
          },
          "E": {
            "item": "ad_astra:venus_sand",
            "amount": 64
          }
        },
        "result": {
          "item": "ad_astra:venus_globe"
        }
      }
).id('mekaminers:create_fase_spatial/venus_globe')
event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAA    ",
          "A   A    ",
          "A  BCB   ",
          "A  DED   ",
          "A  FDF   ",
          "A        ",
          "AAAAA    ",
          "    A    ",
          "   AAA   "
        ],
        "key": {
          "A": {
            "item": "minecraft:gold_block"
          },
          "B": {
            "item": "ad_astra:glacio_cobblestone",
            "amount": 64
          },
          "C": {
            "item": "minecraft:blue_ice",
            "amount": 64
          },
          "D": {
            "item": "ad_astra:glacio_stone",
            "amount": 64
          },
          "E": {
            "item": "botania:tiny_planet"
          },
          "F": {
            "item": "powah:dry_ice",
            "amount": 64
          }
        },
        "result": {
          "item": "ad_astra:glacio_globe"
        }
}).id('mekaminers:create_fase_spatial/glacio_globe')
})