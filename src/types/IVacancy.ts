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
  profession: 'Специалист по согласованиям';
  payment: null;
  currency: string;
  type_of_work: {
    id: number;
    title: string;
  };
  town: {
    id: number;
    title: 'Санкт-Петербург';
  };
  work: string; //долж обяз
  candidat: 'string'; //требования к кандидату
  compensation: string; // условия работы
}
