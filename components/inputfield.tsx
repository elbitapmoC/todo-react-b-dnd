interface Props {
  name: string,
  setName: React.Dispatch<React.SetStateAction<string>>,
  addNewTodo: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({ name, setName, addNewTodo }) => {
  return (
    <form className='relative flex flex-col mt-6 min-w-full lg:min-w-[500px]' onSubmit={addNewTodo}>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter new task'
        className='outline-none border-slate-200 border rounded-full px-6 py-2 transition-shadow easy-in-out hover:shadow-lg' />
      <button
        className=''
        type='submit'
      >
        Go
      </button>
    </form>)
}

export default InputField
