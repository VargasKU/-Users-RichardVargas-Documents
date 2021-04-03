import React, { Component } from 'react';
import equivalentExchangeRandomize from './EquivalentExchange'
import indexNumToArray from './IndexNumToArray'
import useAlteredIndexForTargetArray from './UseAlteredIndex'
import Facts from './Facts'

const facts = Facts
const allTerminologyFacts = facts.filter(x => x.section === 'terminology')
const allTerminologyQAndAToNum = indexNumToArray(allTerminologyFacts)
const allTerminologyIndexRandomized = equivalentExchangeRandomize(allTerminologyQAndAToNum)
const randomTerminologyFacts = useAlteredIndexForTargetArray(allTerminologyFacts, allTerminologyIndexRandomized)
const Terminology = randomTerminologyFacts

export default Terminology; 

