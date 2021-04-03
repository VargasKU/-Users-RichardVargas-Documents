import React, { Component } from 'react';
import equivalentExchangeRandomize from './EquivalentExchange'
import indexNumToArray from './IndexNumToArray'
import useAlteredIndexForTargetArray from './UseAlteredIndex'
import Facts from './Facts'

const facts = Facts
const allMK19Facts = facts.filter(x => x.category === 'MK19')
const allMK19QAndAToNum = indexNumToArray(allMK19Facts)
const allMK19IndexRandomized = equivalentExchangeRandomize(allMK19QAndAToNum)
const randomMK19Facts = useAlteredIndexForTargetArray(allMK19Facts, allMK19IndexRandomized)
const MK19 = randomMK19Facts

export default MK19; 