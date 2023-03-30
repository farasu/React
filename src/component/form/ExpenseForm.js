import style from './ExpenseForm.module.css';

function ExpenseForm(){
    return(
      <div className={style['form-control']}>
        <div className={style['form-element']}>
          <label>Title</label>
          <input type="text" />
        </div>
        <div className={style['form-element']}>
          <label>Name</label>
          <input type="text" />
        </div>
        <div className={style['form-element']}>
          <label>Price</label>
          <input type="text" />
        </div>
        <div className={style['form-element']}>
            <button type="submit">Submit</button>
        </div>
      </div>
    );
}

export default ExpenseForm;