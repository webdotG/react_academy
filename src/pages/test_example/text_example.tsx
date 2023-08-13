import { useState } from 'react';

// function ArrayInSomeNumber ({someNumber}) {
//   const blocks = Array.from({length: someNumber}, () => '')

//     return(
//       <div className='anyBlock'>
//         {blocks.map(index) => {
//           const keyValue = `blockNumber-${index}`;

//           return <div key={keyValue} className='someBlockHaveNumber'/>
//         }

//         }
//       </div>
//     )
// }


function TestExample() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState('hello');
  const [liked, setLiked] = useState(true);
  const [name, setName] = useState('kot');
  const [age, setAge] = useState(5);
  const [form, setForm] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  });
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleClick() {
    setCount(count + 1);
  }
  const handleChange = (e) => {
    setText(e.target.value);
  };
  function handleChangeCheck(e) {
    setLiked(e.target.checked);
  }
  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }
  return (
    <div>
      <button onClick={handleClick}>
        You pressed me {count} times
      </button>
      <div>
        <input value={text} onChange={handleChange} />
        <p>You typed: {text}</p>
        <button onClick={() => setText('hello')}>
          Reset
        </button>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={liked}
            onChange={handleChangeCheck}
          />
          I liked this
        </label>
        <p>You {liked ? 'liked' : 'did not like'} this.</p>
      </div>
      <div>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button onClick={() => setAge(age + 1)}>
          Increment age
        </button>
        <p>Hello, {name}. You are {age}.</p>
      </div>
      <div>
        <label>
          First name:
          <input
            value={form.firstName}
            onChange={e => {
              setForm({
                ...form,
                firstName: e.target.value
              });
            }}
          />
        </label>
        <label>
          Last name:
          <input
            value={form.lastName}
            onChange={e => {
              setForm({
                ...form,
                lastName: e.target.value
              });
            }}
          />
        </label>
        <label>
          Email:
          <input
            value={form.email}
            onChange={e => {
              setForm({
                ...form,
                email: e.target.value
              });
            }}
          />
        </label>
        <p>
          {form.firstName}{' '}
          {form.lastName}{' '}
          ({form.email})
        </p>
      </div>
      <div>
        <label>
          Name:
          <input
            value={person.name}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Title:
          <input
            value={person.artwork.title}
            onChange={handleTitleChange}
          />
        </label>
        <label>
          City:
          <input
            value={person.artwork.city}
            onChange={handleCityChange}
          />
        </label>
        <label>
          Image:
          <input
            value={person.artwork.image}
            onChange={handleImageChange}
          />
        </label>
        <p>
          <i>{person.artwork.title}</i>
          {' by '}
          {person.name}
          <br />
          (located in {person.artwork.city})
        </p>
        <img
          src={person.artwork.image}
          alt={person.artwork.title}
        />
      </div>
    </div>
  );
}

export default TestExample;

// setForm({
//   ...form,
//   firstName: 'Taylor'
// });

// function handleClick() {
//   setAge(a => a + 1); // setAge(42 => 43)
//   setAge(a => a + 1); // setAge(43 => 44)
//   setAge(a => a + 1); // setAge(44 => 45)
// }

// function Details({firstname, lastname, email, comment}) {
//   return (
//     <>
//       <h2>Проверка введённых данных:</h2>
//       <p>
//         <b>Имя: </b>{firstname}<br />
//         <b>Фамилия: </b>{lastname}<br />
//         <b>Email: </b>{email}<br />
//         <b>Комментарий: </b><br />{comment}
//       </p>
//     </>
//   );
// }

// function FeedbackForm() {
//   const [formData, setFormData] = React.useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     comment: '',
//   });

//   const [isHideDetails, setIsHideDetails] = React.useState(true);

//   const handleFieldChange = (evt) => {
//     const {name, value} = evt.target;
//     setFormData({...formData, [name]: value});
//   }

//   const handleUpdateClick = () => {
//     setFormData({
//       firstname: 'Keks',
//       lastname: 'Keksik',
//       email: 'keks@htmlacademy.ru',
//       comment: 'Мяу-мяу'
//     });
//   }

//   const handleDetailsTogglerClick = (evt) => {
//     evt.preventDefault();
//     setIsHideDetails((currentState) => !currentState);
//   }

//   return (
//     <form className="feedback-form">
//       <label htmlFor="firstname">Имя:</label>
//       <input onChange={handleFieldChange} value={formData.firstname} name="firstname" id="firstname" />

//       <label htmlFor="lastname">Фамилия:</label>
//       <input onChange={handleFieldChange} value={formData.lastname} name="lastname" id="lastname" />

//       <label htmlFor="email">Email:</label>
//       <input onChange={handleFieldChange} value={formData.email} name="email" id="email" />

//       <label htmlFor="comment">Комментарий</label>
//       <textarea onChange={handleFieldChange} value={formData.comment} name="comment" id="comment" />

//       <div className="controls">
//         <button type="button" onClick={handleDetailsTogglerClick}>{isHideDetails ? "Показать" : "Спрятать"}</button>
//         <button type="button" onClick={handleUpdateClick}>Обновить</button>
//       </div>

//       {isHideDetails ? null : <Details {...formData} />}
//     </form>
//   );
// }
