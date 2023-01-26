import { useState } from 'react';

import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

function WorkoutForm() {
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);

  const { dispatch } = useWorkoutsContext();

  const handleSubmit = async e => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch('http://localhost:4000/api/workouts/', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setTitle('');
      setLoad('');
      setReps('');

      setError(null);

      dispatch({ type: 'CREATE_WORKOUT', payload: json });

      console.log('new workout added', json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Excersize Title:</label>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <label>Excersize Load (in kg):</label>
      <input
        type="number"
        value={load}
        onChange={e => setLoad(e.target.value)}
      />

      <label>Excersize Reps:</label>
      <input
        type="number"
        value={reps}
        onChange={e => setReps(e.target.value)}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default WorkoutForm;