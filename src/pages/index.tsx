import React from 'react';

import { Button } from '@chakra-ui/react';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Button colorScheme="blue">Button</Button>
    </div>
  );
}
