import { getAccessToken, getUserDetail } from "../../utils/";
const accessToken = getAccessToken();

let token = null;
let userDetail = null;
if (accessToken !== "undefined" && accessToken !== null) {
  token = accessToken;
  userDetail = getUserDetail();
}

const initialData = {
  hotelReducer: {
    loading: false,
    error_msg: null,
    success_msg: null,
    token: token,
    userDetail: userDetail,
    outlets: [],
    roles: [],
    selectedOutlet: null,
    users: [],
    superUsers: [],
    mealTypes: [],
    systemLogs: [],
    tags: [],
    mealTimings: [],
    outletTags: [],
    closures: [],
    preorders: [],
    outletNotes: [],
    seatingType: [],
    seatType: [],
    tables: [],
    outletSeatingInfo: null,
    outletTables: [],
    mergedTables: [],
    sectionTables: [],
    companies: [],
    companyOutlets: [],
    customers: [],
    invoiceDetails: [],
    isVisibleOutletSelection: true,
    tagCategories: [],
    timelineData: [
      { id: 1, name: "t1", pax: 10 },
      { id: 2, name: "t2", pax: 6 },
      { id: 3, name: "t3", pax: 4 },
      { id: 4, name: "t4", pax: 2 },
    ],
    reservationData: [
      { tableid: 1, startDate: new Date(), endDate: new Date() },
      { tableid: 2, startDate: new Date(), endDate: new Date() },
      { tableid: 3, startDate: new Date(), endDate: new Date() },
      { tableid: 4, startDate: new Date(), endDate: new Date() },
      { tableid: 2, startDate: new Date(), endDate: new Date() },
      { tableid: 1, startDate: new Date(), endDate: new Date() },
      { tableid: 3, startDate: new Date(), endDate: new Date() },
    ],
    
    timeSlots: [],
    bookingTables: [],
    bookingReservations: [],
    seatingView:[]
  },
};

export default initialData;
