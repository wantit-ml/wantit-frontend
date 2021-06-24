import React from 'react';

import {
  VStack,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import { SpecializationsProps } from './Skills.interface';

export const Skills = ({
  setSkills,
  skills,
  className,
}: SpecializationsProps): JSX.Element => {
  const changeSkill =
    (index: number): React.ChangeEventHandler<HTMLInputElement> =>
    (event) => {
      setSkills(
        skills.map((skill, idx) => (idx === index ? event.target.value : skill))
      );
    };

  const deleteSkill = (index: number) => () => {
    setSkills(skills.filter((skill, idx) => idx !== index));
  };

  const addSkill = () => {
    setSkills([...skills, '']);
  };

  return (
    <VStack spacing="18px" alignItems="flex-start" className={className}>
      {skills.map((skill, idx) => (
        <InputGroup key={idx}>
          <Input value={skill} onChange={changeSkill(idx)} />
          <InputRightElement>
            <DeleteIcon
              onClick={deleteSkill(idx)}
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
        onClick={addSkill}
      >
        Добавить навык
      </Button>
    </VStack>
  );
};
