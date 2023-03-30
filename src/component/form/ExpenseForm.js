function ExpenseForm(){
    return(
      <div>
        <div>
          <label>Title</label>
          <input type="text" />
        </div>
        <div>
          <label>Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Price</label>
          <input type="text" />
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
      </div>
    );
}

export default ExpenseForm;