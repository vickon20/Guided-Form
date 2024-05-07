"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence } from "framer-motion";
import { useMemo } from "react";
import FormSection from "./form-sections";
import AreaOfExpertise from "./forms/area-of-expertise";
import CareerPathExtentForm from "./forms/career-path-extent-form";
import CountryForm from "./forms/country-form";
import CurrentRoleForm from "./forms/current-role-form";
import EmailForm from "./forms/email-form";
import FullNameForm from "./forms/full-name-form";
import GenderForm from "./forms/gender-form";
import LevelOfEducationForm from "./forms/level-of-education-form";
import LinkToSocialMedia from "./forms/link-to-social-media";
import MentorshipFrequencyForm from "./forms/mentorship-frequency-form";
import PrimaryMotivationCareer from "./forms/primary-motivation-career-form";
import PrimaryMotivationUniversity from "./forms/primary-motivation-university-form";
import SustainableDevelopmentGoalsForm from "./forms/sustainableDevelopmentGoals";
import WorkingInYourField from "./forms/working-in-your-field";
import YearsOfWorkExperience from "./forms/years-of-work-experience";
import { HeroHighlight } from "./hero-highlights";
import SaveInformation from "./save-information";
import useInteractiveForm from "./use-interactive-form-hook";

export function InteractiveForm() {
  const { currentPage, nextPage, previousPage, form } = useInteractiveForm();
  const currentPageState = useMemo(() => currentPage, [currentPage]);

  const isIncompleteInfo =
    !form.fullName ||
    !form.email ||
    !form.gender ||
    !form.country ||
    !form.levelOfEducation ||
    !form.yearsOfWorkExperience ||
    !form.areaOfExpertise ||
    form.areaOfExpertise.length === 0 ||
    !form.currentRole ||
    !form.workingInYourField ||
    !form.sustainableDevelopmentGoals ||
    !form.mentorshipFrequency;

  return (
    <HeroHighlight>
      <AnimatePresence mode="wait" key={currentPageState.id}>
        {currentPageState.id === "home" && (
          <FormSection
            sectionId="home"
            heading="Do you want to enrich the next generation?"
            description="Join the waitlist of over 10,000 mentors and embark on an ambitious mission to mentor secondary schools’ students across Africa and prepare them for fulfilling career"
          >
            <div className="space-y-4 flex flex-col">
              <Button className="w-fit" onClick={nextPage}>
                Proceed To Questions &rarr;
              </Button>
            </div>
          </FormSection>
        )}

        {currentPageState.id === "your-full-name" && (
          <FormSection
            sectionId="your-full-name"
            heading="1) What is your full name?"
          >
            <FullNameForm />
          </FormSection>
        )}

        {currentPageState.id === "your-email" && (
          <FormSection
            sectionId="your-email"
            heading="2) What is your email address?"
          >
            <EmailForm />
          </FormSection>
        )}

        {currentPageState.id === "your-gender" && (
          <FormSection
            sectionId="your-gender"
            heading="3) What is your gender?"
          >
            <GenderForm />
          </FormSection>
        )}

        {currentPageState.id === "your-country" && (
          <FormSection
            sectionId="your-country"
            heading="4) What country do you reside in?"
            description="For time zone reference"
          >
            <CountryForm />
          </FormSection>
        )}

        {/* Another Section Step */}
        {currentPageState.id === "learn-about-qualification" && (
          <FormSection
            sectionId="learn-about-qualification"
            heading="Now, let's learn more about your qualification and experience"
            description="To match you to student with similar interests"
          >
            <div className="flex items-center gap-2 sm:gap-4">
              <Button
                className="w-fit"
                variant="secondary"
                onClick={previousPage}
              >
                &larr; Previous
              </Button>
              <Button className="w-fit" onClick={nextPage}>
                Continue &rarr;
              </Button>
            </div>
          </FormSection>
        )}

        {currentPageState.id === "level-of-education" && (
          <FormSection
            sectionId="level-of-education"
            heading="5) What is your highest level of education?"
          >
            <LevelOfEducationForm />
          </FormSection>
        )}

        {currentPageState.id === "years-of-work-experience" && (
          <FormSection
            sectionId="years-of-work-experience"
            heading="6) How many years of work experience do you have?"
          >
            <YearsOfWorkExperience />
          </FormSection>
        )}

        {currentPageState.id === "area-of-expertise" && (
          <FormSection
            sectionId="area-of-expertise"
            heading="7) What is your area of expertise?"
            description="Choose a career cluster that best suits your experience"
          >
            <AreaOfExpertise />
          </FormSection>
        )}

        {currentPageState.id === "current-role" && (
          <FormSection
            sectionId="current-role"
            heading="8) What is your current role?"
          >
            <CurrentRoleForm />
          </FormSection>
        )}

        {/* Another Section Step */}

        {currentPageState.id === "why-you-do-what-you-do" && (
          <FormSection
            sectionId="why-you-do-what-you-do"
            heading="Your Motivation"
            description="At GuidED, we believe in mission driven career pathways. The next questions explores why you do what you do"
          >
            <div className="flex items-center gap-2 sm:gap-4">
              <Button
                className="w-fit"
                variant="secondary"
                onClick={previousPage}
              >
                &larr; Previous
              </Button>
              <Button className="w-fit" onClick={nextPage}>
                Continue &rarr;
              </Button>
            </div>
          </FormSection>
        )}

        {currentPageState.id === "primary-motivation-university" && (
          <FormSection
            sectionId="primary-motivation-university"
            heading="9) What was your primary motivation for choosing your university/college program?"
            description="Drag and drop to rank your motivation"
          >
            <PrimaryMotivationUniversity />
          </FormSection>
        )}

        {currentPageState.id === "primary-motivation-career" && (
          <FormSection
            sectionId="primary-motivation-career"
            heading="10) What is your primary motivation for choosing your current career path?"
            description="Drag and drop to rank your motivation"
          >
            <PrimaryMotivationCareer />
          </FormSection>
        )}

        {currentPageState.id === "working-in-your-field" && (
          <FormSection
            sectionId="working-in-your-field"
            heading="11) Are you working in your field of study?"
          >
            <WorkingInYourField />
          </FormSection>
        )}

        {currentPageState.id === "career-path-extent" && (
          <FormSection
            sectionId="career-path-extent"
            heading="12) To what extent does your career path align with your personal life mission or values?"
            description="(1 = Not at all, 5 = Extremely well)"
          >
            <CareerPathExtentForm />
          </FormSection>
        )}

        {currentPageState.id === "sustainable-development-goal" && (
          <FormSection
            sectionId="sustainable-development-goal"
            heading="13) What Sustainable Development Goal aligns most with your interest?"
          >
            <SustainableDevelopmentGoalsForm />
          </FormSection>
        )}

        {currentPageState.id === "mentorship-frequency" && (
          <FormSection
            sectionId="mentorship-frequency"
            heading="14) What is your preferred mentorship frequency"
          >
            <MentorshipFrequencyForm />
          </FormSection>
        )}

        {currentPageState.id === "link-to-social-media" && (
          <FormSection
            sectionId="link-to-social-media"
            heading="15) Please provide a link to your LinkedIn or other social media platforms."
          >
            <LinkToSocialMedia />
          </FormSection>
        )}

        {currentPageState.id === "save-information" && (
          <FormSection
            sectionId="save-information"
            heading={
              isIncompleteInfo
                ? "Incomplete Information"
                : "Thank you for partnering with GuidED to empower young Africans."
            }
            description={
              isIncompleteInfo
                ? "Please, Go back and make sure to fill the remaining below"
                : "You Have Successfully Completed our questions. We Really Appreciate Your Response."
            }
          >
            <SaveInformation isIncompleteInfo={isIncompleteInfo} />
          </FormSection>
        )}
      </AnimatePresence>
    </HeroHighlight>
  );
}
