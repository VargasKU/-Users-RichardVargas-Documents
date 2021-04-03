import React, { Component } from 'react';
import equivalentExchangeRandomize from './EquivalentExchange'
import indexNumToArray from './IndexNumToArray'
import useAlteredIndexForTargetArray from './UseAlteredIndex'
import Facts from './Facts'

const facts = Facts
const allM249Facts = facts.filter(x => x.category === 'M249')
const allM249QAndAToNum = indexNumToArray(allM249Facts)
const allM249IndexRandomized = equivalentExchangeRandomize(allM249QAndAToNum)
const randomM249Facts = useAlteredIndexForTargetArray(allM249Facts, allM249IndexRandomized)
const M249 = randomM249Facts

export default M249; 