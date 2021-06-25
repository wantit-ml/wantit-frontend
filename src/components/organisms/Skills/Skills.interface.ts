export type SpecializationsProps = {
  className?: string;
} & (
  | {
      skills: string[];
      setSkills: (specials: string[]) => void;
      readonly?: false;
    }
  | {
      skills: string[];
      readonly: true;
    }
);
