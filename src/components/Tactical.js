import React, { Component } from 'react';
import equivalentExchangeRandomize from './EquivalentExchange'
import indexNumToArray from './IndexNumToArray'
import useAlteredIndexForTargetArray from './UseAlteredIndex'
import Facts from './Facts'

const facts = Facts
const allTacticalFacts = facts.filter(x => x.category === 'tactical')
const allTacticalQAndAToNum = indexNumToArray(allTacticalFacts)
const allTacticalIndexRandomized = equivalentExchangeRandomize(allTacticalQAndAToNum)
const randomTacticalFacts = useAlteredIndexForTargetArray(allTacticalFacts, allTacticalIndexRandomized)
const Tactical = randomTacticalFacts

export default Tactical; 