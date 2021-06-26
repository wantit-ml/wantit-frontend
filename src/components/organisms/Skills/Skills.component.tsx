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

export const Skills = (props: SpecializationsProps): JSX.Element => {
  const { className, skills } = props;

  const changeSkill =
    (index: number): React.ChangeEventHandler<HTMLInputElement> =>
    (event) => {
      if (!props.readonly) {
        props.setSkills(
          skills.map((skill, idx) =>
            idx === index ? event.target.value : skill
          )
        );
      }
    };

  const deleteSkill = (index: number) => () => {
    if (!props.readonly) {
      props.setSkills(skills.filter((skill, idx) => idx !== index));
    }
  };

  const addSkill = () => {
    if (!props.readonly) {
      props.setSkills([...skills, '']);
    }
  };

  return (
    <VStack spacing="18px" alignItems="flex-start" className={className}>
      {skills.map((skill, idx) => (
        <InputGroup key={idx}>
          <Input
            value={skill}
            onChange={changeSkill(idx)}
            readOnly={props.readonly}
            id={`skill-input-${idx}`}
          />

          {!props.readonly && props.skills.length > 1 && (
            <InputRightElement>
              <DeleteIcon
                onClick={deleteSkill(idx)}
                _hover={{ cursor: 'pointer' }}
              />
            </InputRightElement>
          )}
        </InputGroup>
      ))}

      {!props.readonly && (
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
      )}
    </VStack>
  );
};
