import React from 'react';
import { Form, Button } from 'react-bootstrap';

/*filters is an object holding current values for exercise
    onChange updates filter values and onSubmit updates form submission */
const FilterForm = ({ filters, onChange, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formEquipment">{/**Our equipment options */}
        <Form.Label>Equipment</Form.Label>
        <Form.Select name="equipment" value={filters.equipment} onChange={onChange}>
          <option value="">Choose Equipment</option>
          <option value="dumbbell">Dumbbell</option>
          <option value='barbell'>Barbell</option>
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="formMuscle">
        <Form.Label>Muscle Group</Form.Label> {/**Muscle group to target */}
        <Form.Select name="muscleGroup" value={filters.muscleGroup} onChange={onChange}>
          <option value="">Choose Muscle Group</option>
          <option value="chest">Chest</option>
          <option value="back">Back</option>
          <option value="legs">Legs</option>
          <option value="shoulders">Shoulders</option>
          <option value="arms">Arms</option>
        </Form.Select>
      </Form.Group>

      <Button type="submit" variant="primary" className="mt-3">
        Get Exercises
      </Button>
    </Form>
  );
};

export default FilterForm;