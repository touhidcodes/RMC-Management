import moment from "moment";

export const formatStandardDate = (dateString: string): string => {
  if (dateString) {
    const dateMoment = moment(dateString, "YYYY-MM-DD");

    // Format the date to 'DD/MM/YYYY'
    return dateMoment.format("DD/MM/YYYY");
  } else {
    return "";
  }
};

export const formatDate = (dateString: string): string => {
  if (dateString) {
    const dateMoment = moment(dateString, "YYYY-MM-DD");

    // Format the date to 'DD/MM/YYYY'
    return dateMoment.format("DD MMMM, YYYY");
  } else {
    return "";
  }
};
