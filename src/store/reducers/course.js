const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Loja de roupas",
      lessons: [
        { id: 1, title: "Roupa Adulto" },
        { id: 2, title: "Roupa infantil" },
      ],
    },
    {
      id: 2,
      title: "Novidades",
      lessons: [
        { id: 3, title: "Promoções" },
        { id: 4, title: "Lançamentos" },
      ],
    },
  ],
};

export default function course(state = INITIAL_STATE, action) {
  if (action.type === "TOGGLE_LESSON") {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module,
    };
  }
  return state;
}
