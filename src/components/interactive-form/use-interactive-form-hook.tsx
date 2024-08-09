import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { TInteractiveFormPartialSchema } from "./forms/zodSchema";
import { primaryMotivationData } from "./constants";

export type TPageId =
  | "home"
  | "your-full-name"
  | "your-email"
  | "your-gender"
  | "your-country"
  | "learn-about-qualification"
  | "level-of-education"
  | "years-of-work-experience"
  | "area-of-expertise"
  | "current-role"
  | "why-you-do-what-you-do"
  | "primary-motivation-university"
  | "primary-motivation-career"
  | "working-in-your-field"
  | "career-path-extent"
  | "sustainable-development-goal"
  | "link-to-social-media"
  | "mentorship-frequency"
  | "save-information"
  | "";

export type TInitialPages = {
  id: TPageId;
  prev: TPageId;
  next: TPageId;
  question: number;
};

const initialForm: TInteractiveFormPartialSchema = {
  fullName: "",
  email: "",
  gender: "",
  country: "",
  levelOfEducation: "",
  areaOfExpertise: [],
  careerPathExtent: "",
  currentRole: "",
  sustainableDevelopmentGoals: [],
  linkToSocialMedia: "",
  mentorshipFrequency: "",
  primaryMotivationCareer: primaryMotivationData,
  primaryMotivationUniversity: primaryMotivationData,
  yearsOfWorkExperience: "",
  workingInYourField: "",
};

export const initialPages: TInitialPages[] = [
  {
    id: "home",
    question: 0,
    prev: "",
    next: "your-full-name",
  },
  {
    id: "your-full-name",
    question: 1,
    prev: "home",
    next: "your-email",
  },
  {
    id: "your-email",
    question: 1,
    prev: "your-full-name",
    next: "your-gender",
  },
  {
    id: "your-gender",
    question: 1,
    prev: "your-email",
    next: "your-country",
  },
  {
    id: "your-country",
    question: 1,
    prev: "your-gender",
    next: "learn-about-qualification",
  },
  {
    id: "learn-about-qualification",
    question: 0,
    prev: "your-country",
    next: "level-of-education",
  },
  {
    id: "level-of-education",
    question: 1,
    prev: "learn-about-qualification",
    next: "years-of-work-experience",
  },
  {
    id: "years-of-work-experience",
    question: 1,
    prev: "level-of-education",
    next: "area-of-expertise",
  },
  {
    id: "area-of-expertise",
    question: 1,
    prev: "years-of-work-experience",
    next: "current-role",
  },
  {
    id: "current-role",
    question: 1,
    prev: "area-of-expertise",
    next: "why-you-do-what-you-do",
  },
  {
    id: "why-you-do-what-you-do",
    question: 0,
    prev: "current-role",
    next: "primary-motivation-university",
  },
  {
    id: "primary-motivation-university",
    question: 1,
    prev: "why-you-do-what-you-do",
    next: "primary-motivation-career",
  },
  {
    id: "primary-motivation-career",
    question: 1,
    prev: "primary-motivation-university",
    next: "working-in-your-field",
  },
  {
    id: "working-in-your-field",
    question: 1,
    prev: "primary-motivation-career",
    next: "career-path-extent",
  },
  {
    id: "career-path-extent",
    question: 1,
    prev: "working-in-your-field",
    next: "sustainable-development-goal",
  },
  {
    id: "sustainable-development-goal",
    question: 1,
    prev: "career-path-extent",
    next: "mentorship-frequency",
  },
  {
    id: "mentorship-frequency",
    question: 1,
    prev: "sustainable-development-goal",
    next: "link-to-social-media",
  },
  {
    id: "link-to-social-media",
    question: 1,
    prev: "mentorship-frequency",
    next: "save-information",
  },
  {
    id: "save-information",
    question: 0,
    prev: "link-to-social-media",
    next: "",
  },
];

export type TInteractiveFormHook = {
  pages: TInitialPages[];
  form: TInteractiveFormPartialSchema;
  currentPage: TInitialPages;
  setCurrentPage: (currentPageId: TPageId) => void;
  setFormData: (formData: TInteractiveFormPartialSchema) => void;
  nextPage: () => void;
  previousPage: () => void;
  firstPage: () => void;
  lastPage: () => void;
  resetStore: () => void;
};

const useInteractiveForm = create(
  persist<TInteractiveFormHook>(
    (set, get) => ({
      pages: initialPages,
      form: initialForm,
      currentPage: initialPages[0],
      nextPage: () => {
        const currentPage = get().currentPage;
        if (currentPage.next === "") return;

        const newPage = get().pages.find(
          (page) => page.id === currentPage.next
        );
        if (!newPage) return;

        set({ currentPage: newPage });
      },
      previousPage: () => {
        const currentPage = get().currentPage;
        if (currentPage.prev === "") return;

        const newPage = get().pages.find(
          (page) => page.id === currentPage.prev
        );
        if (!newPage) return;

        set({ currentPage: newPage });
      },
      firstPage: () => {
        const currentPage = get().pages.find((page) => page.id === "home");
        if (!currentPage) return;
        set({ currentPage: currentPage });
      },
      lastPage: () => {
        const currentPage = get().pages.find(
          (page) => page.id === "save-information"
        );
        if (!currentPage) return;
        set({ currentPage: currentPage });
      },
      setCurrentPage: (currentPageId) => {
        const currentPage = get().pages.find(
          (page) => page.id === currentPageId
        );
        if (!currentPage) return;
        set({ currentPage: currentPage });
      },
      setFormData: (formData: TInteractiveFormPartialSchema) => {
        set({ form: { ...get().form, ...formData } });
      },
      resetStore: () =>
        set({
          pages: initialPages,
          currentPage: initialPages[0],
          form: initialForm,
        }),
    }),

    {
      name: "interactive-form",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useInteractiveForm;
