import React from 'react';

import {
  VStack,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import { SpecializationsProps } from './Specializations.interface';

export const Specializations = ({
  setSpecializations,
  specializations,
  className,
}: SpecializationsProps): JSX.Element => {
  const changeSpecialization =
    (index: number): React.ChangeEventHandler<HTMLInputElement> =>
    (event) => {
      setSpecializations(
        specializations.map((specialization, idx) =>
          idx === index ? event.target.value : specialization
        )
      );
    };

  const deleteSpecialization = (index: number) => () => {
    setSpecializations(
      specializations.filter((specialization, idx) => idx !== index)
    );
  };

  const addSpecialization = () => {
    setSpecializations([...specializations, '']);
  };

  return (
    <VStack spacing="18px" alignItems="flex-start" className={className}>
      {specializations.map((specialization, idx) => (
        <InputGroup key={idx}>
          <Input value={specialization} onChange={changeSpecialization(idx)} />
          <InputRightElement>
            <DeleteIcon
              onClick={deleteSpecialization(idx)}
              _hover={{ cursor: 'pointer' }}
            />
          </InputRightElement>
        </InputGroup>
      ))}

      <Button
        variant="link"
        color="black"
        textDecoration="none"
        fontWeight="medium"
        _hover={{ textDecoration: 'none' }}
        _active={{ focus: 'none' }}
        onClick={addSpecialization}
      >
        Добавить специализации
      </Button>
    </VStack>
  );
};
