import React, { Component } from 'react';
import equivalentExchangeRandomize from './EquivalentExchange'
import indexNumToArray from './IndexNumToArray'
import useAlteredIndexForTargetArray from './UseAlteredIndex'
import Facts from './Facts'

const facts = Facts
const allFormationsFacts = facts.filter(x => x.section === 'formations')
const allFormationsQAndAToNum = indexNumToArray(allFormationsFacts)
const allFormationsIndexRandomized = equivalentExchangeRandomize(allFormationsQAndAToNum)
const randomFormationsFacts = useAlteredIndexForTargetArray(allFormationsFacts, allFormationsIndexRandomized)
const Formations = randomFormationsFacts

export default Formations; 