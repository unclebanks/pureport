/* eslint-disable comma-style */
/* eslint-disable comma-dangle */
const ROUTES = {
    Kanto: [
        {
            pokes: ['Bulbasaur', 'Charmander', 'Squirtle', 'Eevee', 'Porygon'],
            rarePokes: ['Mew'],
            superRare: []
        },
        {
            name: 'Pallet Town',
            type: "town"
        },
        {
            name: 'Route 1',
            pokes: ['Pidgey', 'Rattata'],
            minLevel: 2,
            maxLevel: 5,
            type: "route",
            respawn: 'palletTown'
        },
        {
            name: 'Viridian City',
            type: "town",
            gymLeader: {
                name: 'Giovanni',
                badge: 'Earth Badge',
                poke: [
                    ['Rhyhorn', 45],
                    ['Dugtrio', 42],
                    ['Nidoqueen', 44],
                    ['Nidoking', 45],
                    ['Rhydon', 50]
                ]
            }
        },
        {
            name: 'Route 22',
            pokes: ['Rattata', 'Nidoran F', 'Nidoran M', 'Mankey', 'Spearow'],
            minLevel: 2,
            maxLevel: 5,
            type: "route",
            respawn: 'viridianCity'
        },
        {
            name: 'Route 2',
            pokes: ['Pidgey', 'Rattata', 'Caterpie', 'Weedle', 'Nidoran F', 'Nidoran M'],
            minLevel: 3,
            maxLevel: 5,
            type: "route",
            respawn: 'viridianCity',
        },
        {
            name: 'Virdian Forest',
            pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Pidgeotto', 'Pikachu'],
            minLevel: 3,
            maxLevel: 6,
            type: "route",
            respawn: 'viridianCity'
        },
        {
            name: 'Pewter City',
            type: "town",
            gymLeader: {
                name: 'Brock',
                badge: 'Boulder Badge',
                win: 'boulder1',
                poke: [
                    ['Geodude', 12],
                    ['Onix', 14]
                ]
            },
        },
        {
            name: 'Route 3',
            pokes: ['Pidgey', 'Rattata', 'Spearow', 'Jigglypuff', 'Sandshrew', 'Mankey'],
            minLevel: 5,
            maxLevel: 12,
            type: "route",
            respawn: 'pewterCity',
            _unlock: {
                badges: {
                    'Boulder Badge': true
                }
            }
        },
        {
            name: 'Mt. Moon',
            pokes: ['Zubat', 'Clefairy', 'Paras', 'Geodude', 'Sandshrew'],
            minLevel: 6,
            maxLevel: 12,
            type: "route",
            respawn: 'pewterCity',
            _unlock: {
                badges: {
                    'Boulder Badge': true
                }
            }
        },
        {
            name: 'Route 4',
            pokes: ['Rattata', 'Spearow', 'Ekans', 'Sandshrew', 'Mankey'],
            minLevel: 6,
            maxLevel: 12,
            type: "route",
            respawn: 'pewterCity',
            _unlock: {
                badges: {
                    'Boulder Badge': true
                }
            }
        },
        {
            name: 'Cerulean City',
            type: "town",
            gymLeader: {
                name: 'Misty',
                badge: 'Cascade Badge',
                win: 'cascade1',
                poke: [
                    ['Staryu', 18],
                    ['Starmie', 21]
                ],
            },
            _unlock: {
                badges: {
                    'Boulder Badge': true
                }
            }
        },
        {
            name: 'Route 24',
            pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Pidgeotto', 'Oddish', 'Venonat', 'Abra', 'Bellsprout'],
            minLevel: 7,
            maxLevel: 14,
            type: "route",
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Boulder Badge': true
                }
            }
        },
        {
            name: 'Route 25',
            pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Pidgeotto', 'Oddish', 'Venonat', 'Abra', 'Bellsprout'],
            minLevel: 7,
            maxLevel: 14,
            type: "route",
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Boulder Badge': true
                }
            }
        },
        {
            name: 'Route 5',
            pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Jigglypuff', 'Oddish', 'Meowth', 'Mankey', 'Abra', 'Bellsprout'],
            minLevel: 10,
            maxLevel: 16,
            type: "route",
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Cascade Badge': true
                }
            }
        },
        {
            name: 'Route 6',
            pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Jigglypuff', 'Oddish', 'Meowth', 'Mankey', 'Abra', 'Bellsprout'],
            minLevel: 10,
            maxLevel: 16,
            type: "route",
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Cascade Badge': true
                }
            }
        },
        {
            name: 'Vermilion City',
            type: "town",
            gymLeader: {
                name: 'Lt. Surge',
                badge: 'Thunder Badge',
                win: 'thunder1',
                poke: [
                    ['Voltorb', 21],
                    ['Pikachu', 18],
                    ['Raichu', 24]
                ]
            },
            _unlock: {
                badges: {
                    'Cascade Badge': true
                }
            }
        },
        {
            name: 'Diglett Cave',
            pokes: ['Diglett', 'Dugtrio', 'Bulbasaur', 'Squirtle'],
            minLevel: 15,
            maxLevel: 31,
            type: "route",
            respawn: 'vermilionCity',
            _unlock: {
                badges: {
                    'Cascade Badge': true
                }
            }
        },
        {
            name: 'Route 11',
            pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Spearow', 'Ekans', 'Sandshrew', 'Drowzee'],
            minLevel: 18,
            maxLevel: 25,
            type: "route",
            respawn: 'vermilionCity',
            _unlock: {
                badges: {
                    'Cascade Badge': true
                }
            }
        },
        {
            name: 'Route 9',
            pokes: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Sandshrew', 'Nidoran F', 'Nidorina', 'Nidoran M', 'Nidorino'],
            minLevel: 9,
            maxLevel: 17,
            type: "route",
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        },
        {
            name: 'Route 10',
            pokes: ['Rattata', 'Raticate', 'Spearow', 'Ekans', 'Sandshrew', 'Nidoran F', 'Nidoran M', 'Machop', 'Magnemite', 'Voltorb'],
            minLevel: 11,
            maxLevel: 17,
            type: "route",
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        },
        {
            name: 'Rock Tunnel',
            pokes: ['Zubat', 'Machop', 'Geodude', 'Onix'],
            minLevel: 11,
            maxLevel: 17,
            type: "route",
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        },
        {
            name: 'Power Plant',
            pokes: ['Pikachu', 'Raichu', 'Magnemite', 'Magneton', 'Grimer', 'Muk', 'Voltorb', 'Electrode', 'Electabuzz', 'Zapdos'],
            minLevel: 20,
            maxLevel: 50,
            type: "route",
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        },
        {
            name: 'Lavender Town',
            type: "town",
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        },
        {
            name: 'Pokemon Tower',
            pokes: ['Gastly', 'Haunter', 'Cubone'],
            minLevel: 13,
            maxLevel: 18,
            type: "route",
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        },
        {
            name: 'Route 8',
            pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Ekans', 'Sandshrew', 'Vulpix', 'Jiglypuff', 'Meowth', 'Mankey', 'Growlithe', 'Abra', 'Kadabra'],
            minLevel: 15,
            maxLevel: 20,
            type: "route",
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        },
        {
            name: 'Route 7',
            pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Vulpix', 'Jigglypuff', 'Oddish', 'Meowth', 'Mankey', 'Growlithe', 'Abra', 'Bellsprout'],
            minLevel: 18,
            maxLevel: 22,
            type: "route",
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        },
        {
            name: 'Celadon City',
            type: "town",
            gymLeader: {
                name: 'Erika',
                badge: 'Rainbow Badge',
                win: 'rainbow1',
                poke: [
                    ['Victreebel', 29],
                    ['Tangela', 24],
                    ['Vileplume', 29]
                ]
            },
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        },
        {
            name: 'Saffron City',
            type: "town",
            gymLeader: {
                name: 'Sabrina',
                badge: 'Marsh Badge',
                win: 'marsh1',
                poke: [
                    ['Kadabra', 38],
                    ['Mr. Mime', 37],
                    ['Venomoth', 38],
                    ['Alakazam', 43]
                ]
            },
            _unlock: {
                badges: {
                    'Rainbow Badge': true
                }
            }
        },
        {
            name: 'Karate Dojo',
            pokes: ['Hitmonlee', 'Hitmonchan'],
            minLevel: 45,
            maxLevel: 55,
            type: "route",
            respawn: 'saffronCity',
            _unlock: {
                badges: {
                    'Marsh Badge': true
                }
            }
        },
        {
            name: 'Route 16',
            pokes: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Doduo', 'Snorlax'],
            minLevel: 18,
            maxLevel: 30,
            type: "route",
            respawn: 'celadonCity',
            _unlock: {
                badges: {
                    'Rainbow Badge': true
                }
            }
        },
        {
            name: 'Route 17',
            pokes: ['Raticate', 'Spearow', 'Fearow', 'Ponyta', 'Doduo', 'Dodrio'],
            minLevel: 20,
            maxLevel: 29,
            type: "route",
            respawn: 'celadonCity',
            _unlock: {
                badges: {
                    'Rainbow Badge': true
                }
            }
        },
        {
            name: 'Route 18',
            pokes: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Doduo'],
            minLevel: 20,
            maxLevel: 29,
            type: "route",
            respawn: 'celadonCity',
            _unlock: {
                badges: {
                    'Rainbow Badge': true
                }
            }
        },
        {
            name: 'Fuchsia City',
            type: "town",
            gymLeader: {
                name: 'Koga',
                badge: 'Soul Badge',
                poke: [
                    ['Koffing', 37],
                    ['Muk', 39],
                    ['Koffing', 37],
                    ['Weezing', 43]
                ]
            },
            _unlock: {
                badges: {
                    'Rainbow Badge': true
                }
            }
        },
        {
            name: 'Safari Zone',
            pokes: ['Nidoran F', 'Nidorina', 'Nidoran M', 'Nidorino', 'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Doduo', 'Exeggcute', 'Cubone', 'Marowak', 'Rhyhorn', 'Chansey', 'Tangela', 'Kangaskhan', 'Scyther', 'Pinsir', 'Tauros'],
            minLevel: 22,
            maxLevel: 31,
            type: "route",
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        },
        {
            name: 'Route 15',
            pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Venomoth', 'Bellsprout', 'Weepinbell', 'Ditto'],
            minLevel: 22,
            maxLevel: 30,
            type: "route",
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        },
        {
            name: 'Route 14',
            pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Venomoth', 'Bellsprout', 'Weepinbell', 'Ditto'],
            minLevel: 23,
            maxLevel: 30,
            type: "route",
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        },
        {
            name: 'Route 13',
            pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Ditto', 'Farfetchd'],
            minLevel: 22,
            maxLevel: 30,
            type: "route",
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        },
        {
            name: 'Route 12',
            pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Snorlax', 'Mr. Mime', 'Farfetchd'],
            minLevel: 22,
            maxLevel: 30,
            type: "route",
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        },
        {
            name: 'Route 19',
            pokes: ['Tentacool'],
            minLevel: 5,
            maxLevel: 40,
            type: "route",
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        },
        {
            name: 'Seafoam Island',
            pokes: ['Zubat', 'Golbat', 'Psyduck', 'Golduck', 'Slowpoke', 'Slowbro', 'Seel', 'Dewgong', 'Shellder', 'Krabby', 'Kingler', 'Horsea', 'Seadra', 'Staryu', 'Jynx', 'Articuno'],
            minLevel: 9,
            maxLevel: 50,
            type: "route",
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        },
        {
            name: 'Route 20',
            pokes: ['Tentacool'],
            minLevel: 5,
            maxLevel: 40,
            type: "route",
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        },
        {
            name: 'Cinnabar Island',
            type: "town",
            gymLeader: {
                name: 'Blaine',
                badge: 'Volcano Badge',
                win: 'volcano1',
                poke: [
                    ['Growlithe', 42],
                    ['Ponyta', 40],
                    ['Rapidash', 42],
                    ['Arcanine', 47]
                ]
            },
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            },
        },
        {
            name: 'Pokemon Mansion',
            pokes: ['Rattata', 'Ratiate', 'Vulpix', 'Growlithe', 'Ponyta', 'Grimer', 'Muk', 'Koffing', 'Weezing', 'Magmar', 'Ditto'],
            minLevel: 26,
            maxLevel: 46,
            type: "route",
            respawn: 'cinnabarIsland',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            },
        },
        {
            name: 'Fossil Restorer',
            pokes: ['Aerodactyl', 'Omanyte', 'Kabuto', 'Lapras'],
            minLevel: 30,
            maxLevel: 30,
            type: "route",
            respawn: 'cinnabarIsland',
            _unlock: {
                badges: {
                    'Volcano Badge': true
                }
            }
        },
        {
            name: 'Route 21',
            pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Raticate', 'Tentacool', 'Tangela'],
            minLevel: 21,
            maxLevel: 32,
            type: "route",
            respawn: 'cinnabarIsland',
            _unlock: {
                badges: {
                    'Volcano Badge': true
                }
            }
        },
        {
            name: 'Route 23',
            pokes: ['Spearow', 'Fearow', 'Ekans', 'Arbok', 'Sandshrew', 'Sandslash', 'Nidorina', 'Nidorino', 'Mankey', 'Primeape', 'Ditto'],
            minLevel: 33,
            maxLevel: 43,
            type: "route",
            respawn: 'viridianCity',
            _unlock: {
                badges: {
                    'Earth Badge': true
                }
            }
        },
        {
            name: 'Victory Road',
            pokes: ['Zubat', 'Golbat', 'Venomoth', 'Machop', 'Machoke', 'Geodude', 'Graveler', 'Onix', 'Marowak', 'Moltres'],
            minLevel: 36,
            maxLevel: 45,
            type: "route",
            respawn: 'viridianCity',
            _unlock: {
                badges: {
                    'Earth Badge': true
                }
            }
        },
        {
            name: 'Cerulean Cave',
            pokes: ['Arbok', 'Raichu', 'Sandslash', 'Wigglytuff', 'Golbat', 'Gloom', 'Parasect', 'Venomoth', 'Kadabra', 'Weepinbell', 'Graveler', 'Magneton', 'Dodrio', 'Hypno', 'Electrode', 'Marowak', 'Lickitung', 'Rhyhorn', 'Rhydon', 'Chansey', 'Ditto', 'Mewtwo'],
            minLevel: 51,
            maxLevel: 60,
            type: "route",
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Earth Badge': true
                }
            }
        },
        {
            name: 'Kanto Old Rod',
            pokes: ['Magikarp'],
            minLevel: 5,
            maxLevel: 5,
            type: "route",
            respawn: 'palletTown',
            kantoOldRod: 1
        },
        {
            name: 'Kanto Good Rod',
            pokes: ['Poliwag', 'Goldeen', 'Magikarp'],
            minLevel: 5,
            maxLevel: 15,
            type: "route",
            respawn: 'palletTown',
            kantoGoodRod: 1
        },
        {
            name: 'Kanto Super Rod',
            pokes: ['Psyduck', 'Poliwag', 'Poliwhirl', 'Tentacool', 'Tentacruel', 'Slowpoke', 'Slowbro', 'Shellder', 'Krabby', 'Kingler', 'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 'Magikarp', 'Gyarados', 'Dratini', 'Dragonair'],
            minLevel: 5,
            maxLevel: 40,
            type: "route",
            respawn: 'palletTown',
            kantoSuperRod: 1
        }
    ],
    // Johto: {
    //     _unlock: {
    //         badges: {
    //             'Earth Badge': true
    //         }
    //     },
    //     _global: {
    //         pokes: ['Chikorita', 'Cyndaquil', 'Totodile'],
    //         rarePokes: ['Shuckle', 'Raikou', 'Entei', 'Suicune', 'Celebi'],
    //         superRare: []
    //     },
    //     NewBarkTown: {
    //         name: 'New Bark Town',
    //         type: "town",
    //         prof: {
    //             name: 'Prof. Elm',
    //             badge: null,
    //             poke: [
    //                 ['Chikorita', 15],
    //                 ['Cyndaquil', 15],
    //                 ['Totodile', 15]
    //             ]
    //         }
    //     },
    //     jroute29: {
    //         name: 'Route 29',
    //         pokes: ['Pidgey', 'Rattata', 'Sentret', 'Hoothoot', 'Hoppip'],
    //         minLevel: 2,
    //         maxLevel: 5,
    //         type: "route",
    //         respawn: 'starter2'
    //     },
    //     cherrygroveCity: {
    //         name: 'Cherrygrove City',
    //         type: "town"
    //     },
    //     jroute30: {
    //         name: 'Route 30',
    //         pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Rattata', 'Zubat', 'Poliwag', 'Hoothoot', 'Ledyba', 'Spinarak', 'Hoppip'],
    //         minLevel: 2,
    //         maxLevel: 5,
    //         type: "route",
    //         respawn: 'cherrygroveCity'
    //     },
    //     jroute46: {
    //         name: 'Route 46',
    //         pokes: ['Rattata', 'Spearow', 'Jigglypuff', 'Geodude', 'Phanpy'],
    //         minLevel: 2,
    //         maxLevel: 5,
    //         type: "route",
    //         respawn: 'NewBarkTown',
    //     },
    //     jroute31: {
    //         name: 'Route 31',
    //         pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Rattata', 'Zubat', 'Poliwag', 'Bellsprout', 'Gastly', 'Hoothoot', 'Ledyba', 'Spinarak', 'Hoppip'],
    //         minLevel: 3,
    //         maxLevel: 6,
    //         type: "route",
    //         respawn: 'cherrygroveCity'
    //     },
    //     darkCave: {
    //         name: 'Dark Cave',
    //         pokes: ['Zubat', 'Geodude', 'Graveler', 'Wobbuffet', 'Dunsparce', 'Teddiursa', 'Ursaring'],
    //         minLevel: 2,
    //         maxLevel: 30,
    //         type: "route",
    //         respawn: 'cherrygroveCity'
    //     },
    //     violetCity: {
    //         name: 'Violet City',
    //         type: "town",
    //         gymLeader: {
    //             name: 'Falkner',
    //             win: 'falkner1',
    //             badge: 'Zephyr Badge',
    //             poke: [
    //                 ['Pidgeotto', 25],
    //                 ['Noctowl', 25],
    //                 ['Pidgeot', 25]
    //             ]
    //         },
    //     },
    //     sproutTower: {
    //         name: 'Sprout Tower',
    //         pokes: ['Rattata', 'Gastly'],
    //         minLevel: 3,
    //         maxLevel: 6,
    //         type: "route",
    //         respawn: 'violetCity',
    //         _unlock: {
    //             badges: {
    //                 'Zephyr Badge': true
    //             }
    //         }
    //     },
    //     jroute32: {
    //         name: 'Route 32',
    //         pokes: ['Pidgey', 'Rattata', 'Ekans', 'Zubat', 'Bellsprout', 'Gastly', 'Hoothoot', 'Mareep', 'Hoppip', 'Wooper'],
    //         minLevel: 4,
    //         maxLevel: 8,
    //         type: "route",
    //         respawn: 'violetCity',
    //         _unlock: {
    //             badges: {
    //                 'Zephyr Badge': true
    //             }
    //         }
    //     },
    //     ruinsofAlph: {
    //         name: 'Ruins of Alph',
    //         pokes: ['Natu', 'Smeargle', 'Wooper'],
    //         minLevel: 18,
    //         maxLevel: 24,
    //         type: "route",
    //         respawn: 'violetCity',
    //         _unlock: {
    //             badges: {
    //                 'Zephyr Badge': true
    //             }
    //         }
    //     },
    //     innerRuins: {
    //         name: 'Inner Ruins',
    //         pokes: ['Unown'],
    //         minLevel: 5,
    //         maxLevel: 5,
    //         type: "route",
    //         respawn: 'violetCity',
    //         _unlock: {
    //             badges: {
    //                 'Zephyr Badge': true
    //             }
    //         }
    //     },
    //     unionCave: {
    //         name: 'Union Cave',
    //         pokes: ['Rattata', 'Raticate', 'Sandshrew', 'Zubat', 'Golbat', 'Geodude', 'Onix', 'Wooper', 'Quagsire', 'Lapras'],
    //         minLevel: 6,
    //         maxLevel: 24,
    //         type: "route",
    //         respawn: 'violetCity',
    //         _unlock: {
    //             badges: {
    //                 'Zephyr Badge': true
    //             }
    //         }
    //     },
    //     jroute33: {
    //         name: 'Route 33',
    //         pokes: ['Rattata', 'Spearow', 'Ekans', 'Zubat', 'Geodude', 'Hoppip'],
    //         minLevel: 6,
    //         maxLevel: 8,
    //         type: "route",
    //         respawn: 'violetCity',
    //         _unlock: {
    //             badges: {
    //                 'Zephyr Badge': true
    //             }
    //         }
    //     },
    //     slowpokeWell: {
    //         name: 'Slowpoke Well',
    //         pokes: ['Zubat', 'Golbat', 'Slowpoke', 'Slowking'],
    //         minLevel: 5,
    //         maxLevel: 25,
    //         type: "route",
    //         respawn: 'violetCity',
    //         _unlock: {
    //             badges: {
    //                 'Zephyr Badge': true
    //             }
    //         }
    //     },
    //     azaleaTown: {
    //         name: 'Azalea Town',
    //         type: "town",
    //         gymLeader: {
    //             name: 'Bugsy',
    //             win: 'bugsy1',
    //             badge: 'Hive Badge',
    //             poke: [
    //                 ['Butterfree', 25],
    //                 ['Beedrill', 25],
    //                 ['Scyther', 25]
    //             ]
    //         },
    //         _unlock: {
    //             badges: {
    //                 'Zephyr Badge': true
    //             }
    //         }
    //     },
    //     ilexForest: {
    //         name: 'Ilex Forest',
    //         pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Zubat', 'Oddish', 'Paras', 'Venonat', 'Psyduck', 'Hoothoot'],
    //         minLevel: 5,
    //         maxLevel: 7,
    //         type: "route",
    //         respawn: 'violetCity',
    //         _unlock: {
    //             badges: {
    //                 'Hive Badge': true
    //             }
    //         }
    //     },
    //     jroute34: {
    //         name: 'Route 34',
    //         pokes: ['Pidgey', 'Rattata', 'Jigglypuff', 'Abra', 'Drowzee', 'Ditto', 'Hoothoot', 'Snubbull'],
    //         minLevel: 10,
    //         maxLevel: 12,
    //         type: "route",
    //         respawn: 'azaleaTown',
    //         _unlock: {
    //             badges: {
    //                 'Hive Badge': true
    //             }
    //         }
    //     },
    //     daycareHouse: {
    //         name: 'Daycare House',
    //         pokes: ['Pichu', 'Cleffa', 'Igglybuff', 'Tyrogue', 'Smoochum', 'Elekid', 'Magby', 'Togepi'],
    //         minLevel: 5,
    //         maxLevel: 5
    //     },
    //     goldenrodCity: {
    //         name: 'Goldenrod City',
    //         type: "town",
    //         gymLeader: {
    //             name: 'Whitney',
    //             win: 'whitney1',
    //             badge: 'Plain Badge',
    //             poke: [
    //                 ['Clefairy', 18],
    //                 ['Miltank', 20]
    //             ]
    //         },
    //         _unlock: {
    //             badges: {
    //                 'Hive Badge': true
    //             }
    //         }
    //     },
    //     jroute35: {
    //         name: 'Route 35',
    //         pokes: ['Pidgey', 'Nidoran F', 'Nidoran M', 'Jigglypuff', 'Psyduck', 'Growlithe', 'Abra', 'Drowzee', 'Ditto', 'Hoothoot', 'Yanma', 'Snubbull'],
    //         minLevel: 10,
    //         maxLevel: 14,
    //         type: "route",
    //         respawn: 'goldenrodCity',
    //         _unlock: {
    //             badges: {
    //                 'Plain Badge': true
    //             }
    //         }
    //     },
    //     nationalPark: {
    //         name: 'National Park',
    //         pokes: ['Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Nidoran F', 'Nidoran M', 'Paras', 'Venonat', 'Psyduck', 'Scyther', 'Pinsir', 'Hoothoot', 'Ledyba', 'Spinarak', 'Sunkern'],
    //         minLevel: 10,
    //         maxLevel: 15,
    //         type: "route",
    //         respawn: 'goldenrodCity',
    //         _unlock: {
    //             badges: {
    //                 'Plain Badge': true
    //             }
    //         }
    //     },
    //     jroute36: {
    //         name: 'Route 36',
    //         pokes: ['Pidgey', 'Nidoran F', 'Nidoran M', 'Vulpix', 'Growlithe', 'Bellsprout', 'Ghastly', 'Hoothoot', 'Ledyba', 'Spinarak', 'Stantler', 'Sudowoodo'],
    //         minLevel: 13,
    //         maxLevel: 20,
    //         type: "route",
    //         respawn: 'goldenrodCity',
    //         _unlock: {
    //             badges: {
    //                 'Plain Badge': true
    //             }
    //         }
    //     },
    //     jroute37: {
    //         name: 'Route 37',
    //         pokes: ['Pidgey', 'Pidgeotto', 'Vulpix', 'Growlithe', 'Hoothoot', 'Noctowl', 'Ledyba', 'Ledian', 'Spinarak', 'Ariados', 'Stantler'],
    //         minLevel: 13,
    //         maxLevel: 16,
    //         type: "route",
    //         respawn: 'goldenrodCity',
    //         _unlock: {
    //             badges: {
    //                 'Plain Badge': true
    //             }
    //         }
    //     },
    //     ecruteakCity: {
    //         name: 'Ecruteak City',
    //         type: "town",
    //         gymLeader: {
    //             name: 'Morty',
    //             badge: 'Fog Badge',
    //             poke: [
    //                 ['Gastly', 21],
    //                 ['Haunter', 21],
    //                 ['Haunter', 23],
    //                 ['Gengar', 25]
    //             ]
    //         },
    //         _unlock: {
    //             badges: {
    //                 'Plain Badge': true
    //             }
    //         }
    //     },
    //     burnedTower: {
    //         name: 'Burned Tower',
    //         pokes: ['Rattata', 'Raticate', 'Zubat', 'Koffing', 'Weezing', 'Magmar'],
    //         minLevel: 13,
    //         maxLevel: 16,
    //         type: "route",
    //         respawn: 'goldenrodCity',
    //         _unlock: {
    //             badges: {
    //                 'Plain Badge': true
    //             }
    //         }
    //     },
    //     tinTower: {
    //         name: 'Tin Tower',
    //         pokes: ['Rattata', 'Gastly', 'Ho-Oh'],
    //         minLevel: 20,
    //         maxLevel: 70,
    //         type: "route",
    //         respawn: 'goldenrodCity',
    //         _unlock: {
    //             badges: {
    //                 'Plain Badge': true
    //             }
    //         }
    //     },
    //     jroute38: {
    //         name: 'Route 38',
    //         pokes: ['Pidgeotto', 'Rattata', 'Raticate', 'Meowth', 'Magnemite', 'Farfetchd', 'Tauros', 'Noctowl', 'Snubbull', 'Miltank'],
    //         minLevel: 13,
    //         maxLevel: 16,
    //         type: "route",
    //         respawn: 'ecruteakCity',
    //         _unlock: {
    //             badges: {
    //                 'Fog Badge': true
    //             }
    //         }
    //     },
    //     jroute39: {
    //         name: 'Route 39',
    //         pokes: ['Pidgeotto', 'Rattata', 'Raticate', 'Meowth', 'Magnemite', 'Farfetchd', 'Tauros', 'Noctowl', 'Miltank'],
    //         minLevel: 15,
    //         maxLevel: 16,
    //         type: "route",
    //         respawn: 'ecruteakCity',
    //         _unlock: {
    //             badges: {
    //                 'Fog Badge': true
    //             }
    //         }
    //     },
    //     olivineCity: {
    //         name: 'Olivine City',
    //         type: "town",
    //         gymLeader: {
    //             name: 'Jasmine',
    //             win: 'jasmine1',
    //             badge: 'Mineral Badge',
    //             poke: [
    //                 ['Magneton', 45],
    //                 ['Forretress', 45],
    //                 ['Steelix', 45]
    //             ]
    //         },
    //         _unlock: {
    //             badges: {
    //                 'Fog Badge': true
    //             }
    //         }
    //     },
    //     jroute40: {
    //         name: 'Route 40',
    //         pokes: ['Tentacool', 'Tentacruel'],
    //         minLevel: 15,
    //         maxLevel: 24,
    //         type: "route",
    //         respawn: 'olivineCity',
    //         _unlock: {
    //             badges: {
    //                 'Mineral Badge': true
    //             }
    //         }
    //     },
    //     jroute41: {
    //         name: 'Route 41',
    //         pokes: ['Mantine', 'Tentacool', 'Tentacruel'],
    //         minLevel: 20,
    //         maxLevel: 24,
    //         type: "route",
    //         respawn: 'cianwoodCity',
    //         _unlock: {
    //             badges: {
    //                 'Storm Badge': true
    //             }
    //         }
    //     },
    //     whirlIsland: {
    //         name: 'Whirl Island',
    //         pokes: ['Zubat', 'Golbat', 'Seel', 'Krabby', 'Lugia'],
    //         minLevel: 22,
    //         maxLevel: 70,
    //         type: "route",
    //         respawn: 'cianwoodCity',
    //         _unlock: {
    //             badges: {
    //                 'Storm Badge': true
    //             }
    //         }
    //     },
    //     cianwoodCity: {
    //         name: 'Cianwood City',
    //         type: "town",
    //         gymLeader: {
    //             name: 'Chuck',
    //             badge: 'Storm Badge',
    //             poke: [
    //                 ['Primeape', 27],
    //                 ['Poliwrath', 30]
    //             ]
    //         },
    //         _unlock: {
    //             badges: {
    //                 'Mineral Badge': true
    //             }
    //         }
    //     },
    //     jroute47: {
    //         name: 'Route 47',
    //         pokes: ['Raticate', 'Spearow', 'Fearow', 'Gloom', 'Farfetchd', 'Ditto', 'Noctowl', 'Miltank'],
    //         minLevel: 40,
    //         maxLevel: 43,
    //         type: "route",
    //         respawn: 'cianwoodCity',
    //         _unlock: {
    //             badges: {
    //                 'Mineral Badge': true
    //             }
    //         }
    //     },
    //     jroute48: {
    //         name: 'Route 48',
    //         pokes: ['Fearow', 'Vulpix', 'Gloom', 'Diglett', 'Growlithe', 'Farfetchd', 'Tauros', 'Hoppip', 'Girafarig'],
    //         minLevel: 40,
    //         maxLevel: 43,
    //         type: "route",
    //         respawn: 'cianwoodCity',
    //         _unlock: {
    //             badges: {
    //                 'Mineral Badge': true
    //             }
    //         }
    //     },
    //     jroute42: {
    //         name: 'Route 42',
    //         pokes: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Zubat', 'Golbat', 'Mankey', 'Mareep', 'Flaaffy', 'Marill'],
    //         minLevel: 13,
    //         maxLevel: 17,
    //         type: "route",
    //         respawn: 'ecruteakCity',
    //         _unlock: {
    //             badges: {
    //                 'Storm Badge': true
    //             }
    //         }
    //     },
    //     mtMortar: {
    //         name: 'Mt. Mortar',
    //         pokes: ['Rattata', 'Raticate', 'Zubat', 'Golbat', 'Machop', 'Machoke', 'Geodude', 'Graveler', 'Marill'],
    //         minLevel: 15,
    //         maxLevel: 32,
    //         type: "route",
    //         respawn: 'ecruteakCity',
    //         _unlock: {
    //             badges: {
    //                 'Storm Badge': true
    //             }
    //         }
    //     },
    //     rocketHideout: {
    //         name: 'Rocket Hideout',
    //         pokes: ['Geodude', 'Voltorb', 'Electrode', 'Koffing'],
    //         minLevel: 23,
    //         maxLevel: 23,
    //         type: "route",
    //         respawn: 'ecruteakCity',
    //         _unlock: {
    //             badges: {
    //                 'Storm Badge': true
    //             }
    //         }
    //     },
    //     mahoganyTown: {
    //         name: 'Mahogany Town',
    //         type: "town",
    //         gymLeader: {
    //             name: 'Pryce',
    //             badge: 'Glacier Badge',
    //             poke: [
    //                 ['Seel', 27],
    //                 ['Dewgong', 29],
    //                 ['Piloswine', 31]
    //             ]
    //         },
    //         _unlock: {
    //             badges: {
    //                 'Storm Badge': true
    //             }
    //         }
    //     },
    //     jroute43: {
    //         name: 'Route 43',
    //         pokes: ['Pidgeotto', 'Raticate', 'Venonat', 'Venomoth', 'Farfetchd', 'Sentret', 'Furret', 'Noctowl', 'Mareep', 'Flaaffy', 'Girafarig'],
    //         minLevel: 15,
    //         maxLevel: 17,
    //         type: "route",
    //         respawn: 'mahoganyTown',
    //         _unlock: {
    //             badges: {
    //                 'Storm Badge': true
    //             }
    //         }
    //     },
    //     lakeofRage: {
    //         name: 'Lake of Rage',
    //         pokes: ['Gyarados', 'Magikarp'],
    //         minLevel: 30,
    //         maxLevel: 30,
    //         type: "route",
    //         respawn: 'mahoganyTown',
    //         _unlock: {
    //             badges: {
    //                 'Storm Badge': true
    //             }
    //         }
    //     },
    //     jroute44: {
    //         name: 'Route 44',
    //         pokes: ['Poliwag', 'Poliwhirl', 'Bellsprout', 'Weepinbell', 'Lickitung', 'Tangela'],
    //         minLevel: 22,
    //         maxLevel: 26,
    //         type: "route",
    //         respawn: 'mahoganyTown',
    //         _unlock: {
    //             badges: {
    //                 'Glacier Badge': true
    //             }
    //         }
    //     },
    //     icePath: {
    //         name: 'Ice Path',
    //         pokes: ['Zubat', 'Golbat', 'Jynx', 'Sneasel', 'Swinub', 'Delibird'],
    //         minLevel: 21,
    //         maxLevel: 24,
    //         type: "route",
    //         respawn: 'mahoganyTown',
    //         _unlock: {
    //             badges: {
    //                 'Glacier Badge': true
    //             }
    //         }
    //     },
    //     dragonsDen: {
    //         name: 'Dragons Den',
    //         pokes: ['Magikarp', 'Dratini'],
    //         minLevel: 10,
    //         maxLevel: 14,
    //         type: "route",
    //         respawn: 'mahoganyTown',
    //         _unlock: {
    //             badges: {
    //                 'Glacier Badge': true
    //             }
    //         }
    //     },
    //     jroute45: {
    //         name: 'Route 45',
    //         pokes: ['Geodude', 'Graveler', 'Gligar', 'Teddiursa', 'Skarmory', 'Phanpy', 'Donphan'],
    //         minLevel: 20,
    //         maxLevel: 27,
    //         type: "route",
    //         respawn: 'mahoganyTown',
    //         _unlock: {
    //             badges: {
    //                 'Glacier Badge': true
    //             }
    //         }
    //     },
    //     blackthornCity: {
    //         name: 'Blackthorn City',
    //         type: "town",
    //         gymLeader: {
    //             name: 'Clair',
    //             badge: 'Rising Badge',
    //             poke: [
    //                 ['Dragonair', 37],
    //                 ['Dragonair', 37],
    //                 ['Dragonair', 37],
    //                 ['Kingdra', 40]
    //             ]
    //         },
    //         _unlock: {
    //             badges: {
    //                 'Glacier Badge': true
    //             }
    //         }
    //     },
    //     jroute26: {
    //         name: 'Route 27',
    //         pokes: ['Raticate', 'Arbok', 'Sandslash', 'Ponyta', 'Doduo', 'Dodrio', 'Noctowl', 'Quagsire'],
    //         minLevel: 28,
    //         maxLevel: 32,
    //         type: "route",
    //         respawn: 'NewBarkTown',
    //         _unlock: {
    //             badges: {
    //                 'Rising Badge': true
    //             }
    //         }
    //     },
    //     jroute27: {
    //         name: 'Route 26',
    //         pokes: ['Raticate', 'Arbok', 'Sandslash', 'Ponyta', 'Doduo', 'Dodrio', 'Noctowl', 'Quagsire'],
    //         minLevel: 28,
    //         maxLevel: 32,
    //         type: "route",
    //         respawn: 'NewBarkTown',
    //         _unlock: {
    //             badges: {
    //                 'Rising Badge': true
    //             }
    //         }
    //     },
    //     jroute28: {
    //         name: 'Route 28',
    //         pokes: ['Ponyta', 'Tangela', 'Ursaring', 'Donphan', 'Rapidash', 'Arbok', 'Doduo', 'Dodrio', 'Sneasel', 'Poliwhirl', 'Golbat'],
    //         minLevel: 39,
    //         maxLevel: 42,
    //         type: "route",
    //         respawn: 'NewBarkTown',
    //         _unlock: {
    //             badges: {
    //                 'Rising Badge': true
    //             }
    //         }
    //     },
    //     mtSilver: {
    //         name: 'Mt.Silver',
    //         pokes: ['Arbok', 'Golbat', 'Parasect', 'Golduck', 'Poliwhirl', 'Machoke', 'Graveler', 'Doduo', 'Dodrio', 'Ponyta', 'Rapidash', 'Onix', 'Tangela', 'Magmar', 'Quagsire', 'Misdreavus', 'Sneasel', 'Ursaring', 'Donphan', 'Larvitar', 'Pupitar'],
    //         minLevel: 38,
    //         maxLevel: 48,
    //         type: "route",
    //         respawn: 'NewBarkTown',
    //         _unlock: {
    //             badges: {
    //                 'Rising Badge': true
    //             }
    //         }
    //     },
    //     jOldRod: {
    //         name: 'Johto Old Rod',
    //         pokes: ['Poliwag', 'Tentacool', 'Krabby', 'Goldeen', 'Magikarp'],
    //         minLevel: 10,
    //         maxLevel: 10,
    //         type: "route",
    //         respawn: 'NewBarkTown',
    //         johtoOldRod: 1
    //     },
    //     jGoodRod: {
    //         name: 'Johto Good Rod',
    //         pokes: ['Poliwag', 'Tentacool', 'Shellder', 'Krabby', 'Horsea', 'Goldeen', 'Staryu', 'Magikarp', 'Gyarados', 'Dratini', 'Chinchou', 'Corsola'],
    //         minLevel: 20,
    //         maxLevel: 20,
    //         type: "route",
    //         respawn: 'NewBarkTown',
    //         johtoGoodRod: 1
    //     },
    //     jSuperRod: {
    //         name: 'Johto Super Rod',
    //         pokes: ['Poliwag', 'Tentacool', 'Tentacruel', 'Shellder', 'Krabby', 'Kingler', 'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 'Magikarp', 'Gyarados', 'Dratini', 'Dragonair', 'Chinchou', 'Lanturn', 'Qwilfish', 'Corsola', 'Remoraid'],
    //         minLevel: 40,
    //         maxLevel: 40,
    //         type: "route",
    //         respawn: 'NewBarkTown',
    //         johtoSuperRod: 1
    //     },
    //     headbutt: {
    //         name: 'Headbutt',
    //         pokes: ['Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Spearow', 'Ekans', 'Exeggcute', 'Hoothoot', 'Noctowl', 'Spinarak', 'Ledyba', 'Aipom', 'Pineco', 'Heracross'],
    //         minLevel: 10,
    //         maxLevel: 10,
    //         type: "route",
    //         respawn: 'blackthornCity',
    //         _unlock: {
    //             badges: {
    //                 'Rising Badge': true
    //             }
    //         }
    //     }
    // }
};

export default ROUTES;