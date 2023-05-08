export interface IVacancyResponse {
  objects: IVacancy[];
  total: number;
}

export interface IVacancy {
  id: number;
  payment_from: number;
  payment_to: number;
  profession: string;
  payment: null;
  currency: string;
  type_of_work: {
    id: number;
    title: string;
  };
  town: {
    id: number;
    title: string;
  };
  vacancyRichText: string;
}
