import React from 'react';
import { useContent } from '../hooks';
import { SelectionFilter } from '../utils';
import { BrowseContainer } from '../containers';

export default function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');
  const slides = SelectionFilter({ films, series });
  return <BrowseContainer slides={slides} />;
}
