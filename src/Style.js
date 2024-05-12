const styles = {
    boxWidth: "max-w-[1280px] w-full",
    navContainer: "w-full fixed top-0",

    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
    buttonDesign: " bg-yellow-500 text-lg text-gray-50 rounded-3xl shadow-lg shadow-yellow-200 border-yellow-500 hover:bg-pink-500 hover:scale-110 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-300 ",




    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexBetween: "flex justify-between items-center",
    flexAllStart: "flex justify-start items-start",

    paddingX: "sm:px-10 px-4",
    paddingY: "sm:py-10 py-4",
    padding: "sm:px-10 px-4 sm:py-8 py-2",
    NavPadding: "sm:px-10 sm:py-2 px-2 py-2 ",
    homePadding: "sm:px-10 pt-24 bt-4",


    marginX: "sm:mx-24 mx-6",
    marginY: "sm:my-16 my-6",
};

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
