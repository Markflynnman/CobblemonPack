const badges = [
    'kubejs:boulder_badge', 'kubejs:cascade_badge', 'kubejs:thunder_badge', 'kubejs:rainbow_badge', 'kubejs:soul_badge', 'kubejs:marsh_badge', 'kubejs:volcano_badge', 'kubejs:earth_badge',
    'kubejs:zephyr_badge', 'kubejs:hive_badge', 'kubejs:plain_badge', 'kubejs:fog_badge', 'kubejs:storm_badge', 'kubejs:mineral_badge', 'kubejs:glacier_badge', 'kubejs:rising_badge',
    'kubejs:dynamo_badge', 'kubejs:heat_badge', 'kubejs:balance_badge', 'kubejs:feather_badge', 'kubejs:mind_badge', 'kubejs:rain_badge', 'kubejs:stone_badge', 'kubejs:knuckle_badge',
    'kubejs:relic_badge', 'kubejs:mine_badge', 'kubejs:icicle_badge', 'kubejs:beacon_badge', 'kubejs:coal_badge', 'kubejs:forest_badge', 'kubejs:cobble_badge', 'kubejs:fen_badge',
    'kubejs:jet_badge', 'kubejs:freeze_badge', 'kubejs:wave_badge', 'kubejs:trio_badge', 'kubejs:basic_badge', 'kubejs:toxic_badge', 'kubejs:insect_badge', 'kubejs:bolt_badge', 'kubejs:quake_badge', 'kubejs:legend_badge',
    'kubejs:bug_badge', 'kubejs:cliff_badge', 'kubejs:rumble_badge', 'kubejs:plant_badge', 'kubejs:voltage_badge', 'kubejs:fairy_badge', 'kubejs:psychic_badge', 'kubejs:iceberg_badge',
    'kubejs:sas_grass_badge', 'kubejs:sas_water_badge', 'kubejs:sas_fire_badge', 'kubejs:sas_fighting_badge', 'kubejs:sas_ghost_badge', 'kubejs:sas_fairy_badge', 'kubejs:sas_rock_badge', 'kubejs:sas_ice_badge', 'kubejs:sas_dark_badge', 'kubejs:sas_dragon_badge',
    'kubejs:sv_bug_badge', 'kubejs:sv_grass_badge', 'kubejs:sv_electric_badge', 'kubejs:sv_water_badge', 'kubejs:sv_normal_badge', 'kubejs:sv_ghost_badge', 'kubejs:sv_psychic_badge', 'kubejs:sv_ice_badge', 'kubejs:sv_dark_badge', 'kubejs:sv_fire_badge', 'kubejs:sv_poison_badge', 'kubejs:sv_fairy_badge', 'kubejs:sv_fighting_badge', 'kubejs:sv_rock_badge', 'kubejs:sv_flying_badge', 'kubejs:sv_steel_badge', 'kubejs:sv_ground_badge', 'kubejs:sv_dragon_badge'
];

ItemEvents.rightClicked(badges, event => {
    try {
        let owner = event.item.nbt.Owner
        let player_name = event.player.name.toString().replace("literal{", "").replace("}", "")

        if (owner === player_name) { event.player.tell("You own this badge!") }
        else { event.player.tell("This badge belongs to " + owner + ".") }
    }
    catch (error) {
        console.warn("Invalid badge: " + error)

    }
})

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    event.register(Commands.literal('gymbattlewon')
    .requires(s => s.hasPermission(2))
    .then(Commands.argument('badge', Arguments.STRING.create(event))
    .then(Commands.argument('target', Arguments.PLAYER.create(event))
      .executes(c => gymbattlewon(Arguments.STRING.getResult(c, 'badge'), Arguments.PLAYER.getResult(c, 'target')))
    ))
    )

    let gymbattlewon = (badge, player) => {
        let player_name = player.name.toString().replace("literal{", "").replace("}", "")

        if (Item.of('kubejs:' + badge.toLowerCase() + '_badge') == Item.of('minecraft:air')) { 
            console.error("Invalid badge name: " + badge) 
            return 0
        }

        player.give(Item.of('kubejs:' + badge.toLowerCase() + '_badge', {Owner:player_name}))

        badge = badge.replace("sv_", "").replace("sas_", "")
        let firstLetter = badge.slice(0, 1).toUpperCase()
        badge = firstLetter + badge.slice(1)
        console.log(player.name + " has won the " + badge + " Badge!")
        player.tell("You have won the " + badge + " Badge!")
        return 1
    }
})

try {
    FTBFilterSystemEvents.customFilter("boulderBadge", event => {
        if (event.getStack().id === "kubejs:boulder_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for boulderBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("cascadeBadge", event => {
        if (event.getStack().id === "kubejs:cascade_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for cascadeBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("thunderBadge", event => {
        if (event.getStack().id === "kubejs:thunder_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for thunderBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("rainbowBadge", event => {
        if (event.getStack().id === "kubejs:rainbow_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for rainbowBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("soulBadge", event => {
        if (event.getStack().id === "kubejs:soul_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for soulBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("marshBadge", event => {
        if (event.getStack().id === "kubejs:marsh_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for marshBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("volcanoBadge", event => {
        if (event.getStack().id === "kubejs:volcano_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for volcanoBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("earthBadge", event => {
        if (event.getStack().id === "kubejs:earth_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for earthBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("zephyrBadge", event => {
        if (event.getStack().id === "kubejs:zephyr_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for zephyrBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("hiveBadge", event => {
        if (event.getStack().id === "kubejs:hive_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for hiveBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("plainBadge", event => {
        if (event.getStack().id === "kubejs:plain_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for plainBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("fogBadge", event => {
        if (event.getStack().id === "kubejs:fog_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for fogBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("stormBadge", event => {
        if (event.getStack().id === "kubejs:storm_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for stormBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("mineralBadge", event => {
        if (event.getStack().id === "kubejs:mineral_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for mineralBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("glacierBadge", event => {
        if (event.getStack().id === "kubejs:glacier_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for glacierBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("risingBadge", event => {
        if (event.getStack().id === "kubejs:rising_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for risingBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("dynamoBadge", event => {
        if (event.getStack().id === "kubejs:dynamo_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for dynamoBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("heatBadge", event => {
        if (event.getStack().id === "kubejs:heat_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for heatBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("balanceBadge", event => {
        if (event.getStack().id === "kubejs:balance_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for balanceBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("featherBadge", event => {
        if (event.getStack().id === "kubejs:feather_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for featherBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("mindBadge", event => {
        if (event.getStack().id === "kubejs:mind_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for mindBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("rainBadge", event => {
        if (event.getStack().id === "kubejs:rain_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for rainBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("stoneBadge", event => {
        if (event.getStack().id === "kubejs:stone_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for stoneBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("knuckleBadge", event => {
        if (event.getStack().id === "kubejs:knuckle_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for knuckleBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("relicBadge", event => {
        if (event.getStack().id === "kubejs:relic_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for relicBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("mineBadge", event => {
        if (event.getStack().id === "kubejs:mine_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for mineBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("icicleBadge", event => {
        if (event.getStack().id === "kubejs:icicle_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for icicleBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("beaconBadge", event => {
        if (event.getStack().id === "kubejs:beacon_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for beaconBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("coalBadge", event => {
        if (event.getStack().id === "kubejs:coal_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for coalBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("forestBadge", event => {
        if (event.getStack().id === "kubejs:forest_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for forestBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("cobbleBadge", event => {
        if (event.getStack().id === "kubejs:cobble_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for cobbleBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("fenBadge", event => {
        if (event.getStack().id === "kubejs:fen_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for fenBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("jetBadge", event => {
        if (event.getStack().id === "kubejs:jet_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for jetBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("freezeBadge", event => {
        if (event.getStack().id === "kubejs:freeze_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for freezeBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("waveBadge", event => {
        if (event.getStack().id === "kubejs:wave_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for waveBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("trioBadge", event => {
        if (event.getStack().id === "kubejs:trio_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for trioBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("basicBadge", event => {
        if (event.getStack().id === "kubejs:basic_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for basicBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("toxicBadge", event => {
        if (event.getStack().id === "kubejs:toxic_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for toxicBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("insectBadge", event => {
        if (event.getStack().id === "kubejs:insect_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for insectBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("boltBadge", event => {
        if (event.getStack().id === "kubejs:bolt_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for boltBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("quakeBadge", event => {
        if (event.getStack().id === "kubejs:quake_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for quakeBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("legendBadge", event => {
        if (event.getStack().id === "kubejs:legend_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for legendBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("bugBadge", event => {
        if (event.getStack().id === "kubejs:bug_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for bugBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("cliffBadge", event => {
        if (event.getStack().id === "kubejs:cliff_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for cliffBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("rumbleBadge", event => {
        if (event.getStack().id === "kubejs:rumble_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for rumbleBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("plantBadge", event => {
        if (event.getStack().id === "kubejs:plant_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for plantBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("voltageBadge", event => {
        if (event.getStack().id === "kubejs:voltage_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for voltageBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("fairyBadge", event => {
        if (event.getStack().id === "kubejs:fairy_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for fairyBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("psychicBadge", event => {
        if (event.getStack().id === "kubejs:psychic_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for psychicBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("icebergBadge", event => {
        if (event.getStack().id === "kubejs:iceberg_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for icebergBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("sasgrassBadge", event => {
        if (event.getStack().id === "kubejs:sas_grass_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for sasgrassBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("saswaterBadge", event => {
        if (event.getStack().id === "kubejs:sas_water_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for saswaterBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("sasfireBadge", event => {
        if (event.getStack().id === "kubejs:sas_fire_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for sasfireBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("sasfightingBadge", event => {
        if (event.getStack().id === "kubejs:sas_fighting_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for sasfightingBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("sasghostBadge", event => {
        if (event.getStack().id === "kubejs:sas_ghost_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for sasghostBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("sasfairyBadge", event => {
        if (event.getStack().id === "kubejs:sas_fairy_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for sasfairyBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("sasrockBadge", event => {
        if (event.getStack().id === "kubejs:sas_rock_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for sasrockBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("sasiceBadge", event => {
        if (event.getStack().id === "kubejs:sas_ice_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for sasiceBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("sasdarkBadge", event => {
        if (event.getStack().id === "kubejs:sas_dark_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for sasdarkBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("sasdragonBadge", event => {
        if (event.getStack().id === "kubejs:sas_dragon_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for sasdragonBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("svbugBadge", event => {
        if (event.getStack().id === "kubejs:sv_bug_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for svbugBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("svgrassBadge", event => {
        if (event.getStack().id === "kubejs:sv_grass_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for svgrassBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("svelectricBadge", event => {
        if (event.getStack().id === "kubejs:sv_electric_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for svelectricBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("svwaterBadge", event => {
        if (event.getStack().id === "kubejs:sv_water_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for svwaterBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("svnormalBadge", event => {
        if (event.getStack().id === "kubejs:sv_normal_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for svnormalBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("svghostBadge", event => {
        if (event.getStack().id === "kubejs:sv_ghost_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for svghostBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("svpsychicBadge", event => {
        if (event.getStack().id === "kubejs:sv_psychic_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for svpsychicBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("sviceBadge", event => {
        if (event.getStack().id === "kubejs:sv_ice_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for sviceBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("svdarkBadge", event => {
        if (event.getStack().id === "kubejs:sv_dark_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for svdarkBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("svfireBadge", event => {
        if (event.getStack().id === "kubejs:sv_fire_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for svfireBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("svpoisonBadge", event => {
        if (event.getStack().id === "kubejs:sv_poison_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for svpoisonBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("svfairyBadge", event => {
        if (event.getStack().id === "kubejs:sv_fairy_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for svfairyBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("svfightingBadge", event => {
        if (event.getStack().id === "kubejs:sv_fighting_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for svfightingBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("svrockBadge", event => {
        if (event.getStack().id === "kubejs:sv_rock_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for svrockBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("svflyingBadge", event => {
        if (event.getStack().id === "kubejs:sv_flying_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for svflyingBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("svsteelBadge", event => {
        if (event.getStack().id === "kubejs:sv_steel_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for svsteelBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("svgroundBadge", event => {
        if (event.getStack().id === "kubejs:sv_ground_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for svgroundBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })
    
    FTBFilterSystemEvents.customFilter("svdragonBadge", event => {
        if (event.getStack().id === "kubejs:sv_dragon_badge" && event.getStack().nbt != null) {
            console.info("custom filter event for svdragonBadge: " + event.getStack() + " nbt = " + event.getStack().nbt)
            if (event.getStack().nbt.Owner != null) {
                event.success()
            }
        }
        else {
            event.cancel()
        }
    })    
}
catch (error) {
    if (error instanceof ReferenceError) {
        console.warn("FTB Filter System not installed. Skipping filter events.") 
    }
    else {
        console.error(error)
    }
}