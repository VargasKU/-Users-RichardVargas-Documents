import React, { Component } from 'react';
import equivalentExchangeRandomize from './EquivalentExchange'
import indexNumToArray from './IndexNumToArray'
import useAlteredIndexForTargetArray from './UseAlteredIndex'
import Facts from './Facts'

const facts = Facts
const m4Facts = facts.filter(x => x.category === 'M4')
const m4QAndAToNum = indexNumToArray(m4Facts)
const m4IndexRandomized = equivalentExchangeRandomize(m4QAndAToNum)
const randomM4Facts = useAlteredIndexForTargetArray(m4Facts, m4IndexRandomized)
const M4Facts = randomM4Facts

export default M4Facts; 


// const facts = Facts
// const allWeaponsFacts = facts.filter(x => x.section === 'weapons')
// const allWeaponsQAndAToNum = indexNumToArray(allWeaponsFacts)
// const allWeaponsIndexRandomized = equivalentExchangeRandomize(allWeaponsQAndAToNum)
// const randomWeaponsFacts = useAlteredIndexForTargetArray(allWeaponsFacts, allWeaponsIndexRandomized)
// const Weapons = randomWeaponsFacts
