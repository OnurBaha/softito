import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [
    {
      id: "AY",
      name: "Ahmet Yılmaz",
      role: "Admin",
      active: true,
      initials: "AY",
      bgClass: "avatar-indigo",
    },
    {
      id: "AS",
      name: "Aynur Sarı",
      role: "Muhasebe",
      active: true,
      initials: "AS",
      bgClass: "avatar-slate",
    },
    {
      id: "SY",
      name: "Selami Yılmaz",
      role: "Teknik Destek",
      active: true,
      initials: "SY",
      bgClass: "avatar-orange",
    },
    {
      id: "SK",
      name: "Selin Kara",
      role: "Admin",
      active: false,
      initials: "SK",
      bgClass: "avatar-blue",
    },
    {
      id: "AG",
      name: "Atakan Güçlü",
      role: "Satış",
      active: false,
      initials: "AG",
      bgClass: "avatar-red",
    },
  ],
  activeContactId: "MY",
  threads: {
    AY: [
      {
        id: 1,
        sender: "AY",
        content: "Selam Onur Bey Bugün Toplantımız saat 15.00 da olacaktır.",
        time: "10.30",
      },
      {
        id: 2,
        sender: "AS",
        content: "Selam Onur Bey Bugün Toplantımız saat 15.00 da olacaktır.",
        time: "10.42",
      },
      {
        id: 3,
        sender: "AY",
        content: "Selam Onur Bey Bugün Toplantımız saat 15.00 da olacaktır.",
        time: "14.30",
      },
      {
        id: 4,
        sender: "AS",
        content: "Selam Onur Bey Bugün Toplantımız saat 15.00 da olacaktır.",
        time: "15.30",
      },
    ],
    SY: [
      {
        id: 1,
        sender: "SY",
        content: "Selam Onur Bey Bugün Toplantımız saat 15.00 da olacaktır.",
        time: "10.30",
      },
    ],
    SK: [
      {
        id: 1,
        sender: "SK",
        content: "Selam Onur Bey Bugün Toplantımız saat 15.00 da olacaktır.",
        time: "10.30",
      },
    ],
    AG: [
      {
        id: 1,
        sender: "AG",
        content: "Selam Onur Bey Bugün Toplantımız saat 15.00 da olacaktır.",
        time: "10.30",
      },
    ],
    AS: [
      {
        id: 1,
        sender: "AS",
        content: "Selam Onur Bey Bugün Toplantımız saat 15.00 da olacaktır.",
        time: "10.30",
      },
    ],
  },
};

const messageSlice = createSlice({
  name: "messaging",
  initialState,
  reducers: {
    sendMesaage: (state, action) => {
      const activeId = state.activeContactId;
      if (!state.threads[activeId]) {
        state.threads[activeId] = [];
      }
      const timeStr = new Date().toLocaleTimeString("tr-TR", {
        hour: "2-digit",
        minute: "2-digit",
      });
      const nextId =
        state.threads[activeId].length > 0
          ? Math.max(...state.threads[activeId].map((m) => m.id)) + 1
          : 1;
      state.threads[activeId].push({
        id: nextId,
        sender: "SY",
        content: action.payload,
        time: timeStr,
      });
    },
    setActiveContact: (state, action) => {
      state.activeContactId = action.payload;
    },
  },
});

export const { sendMesaage, setActiveContact } = messageSlice.actions;
export default messageSlice.reducer;
