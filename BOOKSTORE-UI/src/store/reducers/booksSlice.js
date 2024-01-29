import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../config/axiosConfig";



export const getBooksWithFilter = async (low, high, author) => {
  try {
    const result = await axios.get(`/filter`, {
      params: {
        low: low,
        high: high,
        author: author,
      }
    });
    console.log('result of getFilterdAuthor', result.data);
    return result.data;
  } catch (error) {
    console.log('error in getbooks service -> ', error)
  }
}


const initialBooks = await getBooksWithFilter();
const initialState = {
  books: initialBooks,
  filteredBooks: [],
  filterCount: 0,
  priceFilters: [],
  authorFilters: [],
  categoryId: ''
}
export const addBook = createAsyncThunk('books/addBook',  (newBookData, { dispatch, getState, rejectWithValue }) => {
  try {
    return axios.post('/books', newBookData).then(response=>{
      //dispatch(bookAdded(response.data));
    return response.data;
    })
    // Now dispatch an action to add the book to the state
    
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
const booksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
    addPriceFilter: (state, action) => {
      const price = action.payload;
      const [low, high] = price.split('-').map(p => parseInt(p));

      state.priceFilters = state.priceFilters.concat([{ low, high }])

      state.filterCount++

      state.filteredBooks = filter(state);

    },
    bookAdded: (state, action) => {
      state.books.push(action.payload)
    }
      ,
    removePriceFilter: (state, action) => {
      const price = action.payload;
      const [low, high] = price.split('-').map(p => parseInt(p))
      state.priceFilters = state.priceFilters.filter(priceFilter => priceFilter.low !== low && priceFilter.high !== high)
      state.filterCount--
      state.filteredBooks = filter(state)
    },
    setAuthorFilter: (state, action) => {
      const author = action.payload;
      state.authorFilters = state.authorFilters.concat([author]);
      state.filterCount++;
      state.filteredBooks = filter(state)
    },
    removeAuthorFilter: (state, action) => {
      const author = action.payload;
      state.authorFilters = state.authorFilters.filter(authFilter => authFilter !== author)
      state.filterCount--;
      state.filteredBooks = filter(state)
    },

    catId: (state, action) => {
      console.log('action.payload==================>', action.payload);
      state.categoryId = action.payload;
    },
    testSendAuthor: (state, action) => {
      const authorName = action.payload;
      // console.log('authorName----->',authorName);
    getFilterdAuthor(authorName)
    },
    resetFilterCount:(state)=>{
      state.filterCount = 0;
      state.filteredBooks = []
    }

  },
  extraReducers:(builder)=>{
    builder.addCase(addBook.fulfilled, (state,action)=>{
      state.books.push(action.payload)
    })
  }
})
export const {resetFilterCount ,setBooks, catId, removePriceFilter, addPriceFilter, setAuthorFilter, removeAuthorFilter, testSendAuthor } = booksSlice.actions;

function filter(state) {
  const filteredBooks = state.books.filter(book => {
    if (book.category !== state.categoryId) return false;

    let flag = state.authorFilters.length === 0 ? true : false;
    for (const authFilter of state.authorFilters) {
      if (book.author.name === authFilter) {
        flag = true;
        break;
      }
    }
    let flag2 = state.priceFilters.length === 0 ? true : false;
    for (const priceFilter of state.priceFilters) {
      if (book.price >= priceFilter.low && book.price <= priceFilter.high) {
        if (flag) 
        flag2 = true
        break;
      }
    }

    return flag && flag2;
  });
  return filteredBooks;
}
export const {bookAdded}=booksSlice.actions
export default booksSlice.reducer;





