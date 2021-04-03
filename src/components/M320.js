import React, { Component } from 'react';
import equivalentExchangeRandomize from './EquivalentExchange'
import indexNumToArray from './IndexNumToArray'
import useAlteredIndexForTargetArray from './UseAlteredIndex'
import Facts from './Facts'

const facts = Facts
const allM320Facts = facts.filter(x => x.category === 'M320')
const allM320QAndAToNum = indexNumToArray(allM320Facts)
const allM320IndexRandomized = equivalentExchangeRandomize(allM320QAndAToNum)
const randomM320Facts = useAlteredIndexForTargetArray(allM320Facts, allM320IndexRandomized)
const M320 = randomM320Facts

export default M320; 