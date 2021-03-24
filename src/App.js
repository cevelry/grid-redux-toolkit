import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';

const App = () => (
  <div style={{ width: '60%', margin: 'auto' }}>
    <h3>New Text</h3>
    <ExpenseForm />
    <hr style={{ border: '3px solid grey'}} />
    <h3>Grid Compoonent</h3>
    <ExpenseList  />
  </div>
);

export default App;
