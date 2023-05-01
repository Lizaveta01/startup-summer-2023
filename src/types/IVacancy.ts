export interface IVacancyResponse {
  objects: IVacancy[];
  total: number;
  corrected_keyword?: string;
  more: boolean;
}

export interface IVacancy {
  id: number;
  id_client: number;
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
  work: string;
  candidat: 'string';
  compensation: string;
}
