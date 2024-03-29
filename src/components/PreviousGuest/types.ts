export interface PreviousGuestType {
  img: string;
  link: string;
  name: string;
  gig: string[];
}

export const defaultGuest: PreviousGuestType = {
  img: "",
  link: "",
  name: "",
  gig: [""],
};

export interface PreviousGuestProps {
  artist: PreviousGuestType;
  setModalData: (val: PreviousGuestType) => void;
  setShow: (val: boolean) => void;
}
