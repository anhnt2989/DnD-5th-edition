declare module 'AppModels' {
  export type TSpellDetailProps = {

  }

  export type TRecordElement = {
    index: string
    name: string
    url: string
  }

  export type TDamageAtSlotLevel = {
    3: string
    2: string
    4: string
    5: string
    6: string
    7: string
    8: string
    9: string
  }

  export type TCharacterClass = Array<TRecordElement>

  export type TSpellDetail = {
    _id: string
    index: string
    name: string
    desc: Array<string>
    higher_level: Array<string>
    range: string
    components: Array<string>
    material: string
    ritual: boolean
    // should know all duration type to fill instead of string type
    // duration: "Instantaneous" | "Cooldown"
    duration: string
    concentration: boolean
    casting_time: number
    level: number
    // should know all attack type to fill instead of string type
    // attack_type: "ranged" | "melee"
    attack_type: string
    damage: {
      damage_type: TRecordElement
      damage_at_slot_level: TDamageAtSlotLevel
    },
    school: TRecordElement,
    classes: TCharacterClass
    subclasses: TCharacterClass
    url: string
  }
}