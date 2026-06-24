import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      company: "Yılmaz Mühendislik LTD. ŞTİ.",
      email: "ahmet@yilmaz.com",
      phone: "05333333333",
      balance: 12500,
      status: "Aktif",
    },
    {
      id: 2,
      name: "Aynur Yılmaz",
      company: "Yılmaz Mühendislik LTD. ŞTİ.",
      email: "aynur@yilmaz.com",
      phone: "05333333333",
      balance: 12500,
      status: "Aktif",
    },
    {
      id: 3,
      name: "Selami Yılmaz",
      company: "Yılmaz Mühendislik LTD. ŞTİ.",
      email: "selami@yilmaz.com",
      phone: "05333333333",
      balance: 12500,
      status: "Pasif",
    },
    {
      id: 4,
      name: "Selin Yılmaz",
      company: "Yılmaz Mühendislik LTD. ŞTİ.",
      email: "selin@yilmaz.com",
      phone: "05333333333",
      balance: 12500,
      status: "Aktif",
    },
    {
      id: 5,
      name: "Atakan Yılmaz",
      company: "Yılmaz Mühendislik LTD. ŞTİ.",
      email: "atakan@yilmaz.com",
      phone: "05333333333",
      balance: 12500,
      status: "Pasif",
    },
  ],
  selectorCustomer: null,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: (state, action) => {
    addCustomer: (state, action) => {
      const nextId =
        state.list.length > 0
          ? Math.max(...state.list.map((c) => c.id)) + 1
          : 1;
      state.list.push({
        id: nextId,
        balance: 0,
        ...action.payload,
      });
    };
    editCustomer: (state, action) => {
      const index = state.list.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = { ...state.list[index], ...action.payload };
      }
      state.selectorCustomer = null;
    };
    deleteCustomer: (state, action) => {
      state.list = state.list.filter((c) => c.id !== action.payload);
    };

    selectCustomerForEdit: (state, action) => {
      state.selectCustomerForEdit = action.payload;
    };
    clearSelectedCustomer: (state) => {
      state.clearSelectedCustomer = null;
    };
  },
});

export const {
  addCustomer,
  editCustomer,
  deleteCustomer,
  selectCustomerForEdit,
  clearSelectedCustomer,
} = customerSlice.actions;
export default customerSlice.reducer;
