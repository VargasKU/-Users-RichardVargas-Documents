import React, { Component } from 'react';
import equivalentExchangeRandomize from './EquivalentExchange'
import indexNumToArray from './IndexNumToArray'
import useAlteredIndexForTargetArray from './UseAlteredIndex'
import Facts from './Facts'

const facts = Facts
const allWeaponsFacts = facts.filter(x => x.section === 'weapons')
const allWeaponsQAndAToNum = indexNumToArray(allWeaponsFacts)
const allWeaponsIndexRandomized = equivalentExchangeRandomize(allWeaponsQAndAToNum)
const randomWeaponsFacts = useAlteredIndexForTargetArray(allWeaponsFacts, allWeaponsIndexRandomized)
const Weapons = randomWeaponsFacts

export default Weapons; 


