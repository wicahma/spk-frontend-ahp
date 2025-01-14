"use server";
import {
  ICreateAlternatifRequest,
  IUpdateAlternatifRequest,
} from "@/interfaces/api/alternatif/mutate.interface";
import { IBaseAPIResponse } from "@/interfaces/global/api.interface";
import satellite from "../satellite";
import { IGetListAlternatifResponse } from "@/interfaces/api/alternatif/query.interface";
import { IGetKriteriaDetailResponse } from "@/interfaces/api/kriteria/query.interface";
import { env } from "@/config";

export const postCreateAlternatifAPI = async (
  body: ICreateAlternatifRequest
) => {
  return await satellite.post<IBaseAPIResponse>(`/api/alternatif`, body);
};

export const getListAlternatifAPI = async () => {
  return await satellite
    .get<IBaseAPIResponse<IGetListAlternatifResponse[]>>(`/api/alternatif`)
    .then((r) => r.data);
};

export const getDetailAlternatifAPI = async (id: number) => {
  return await satellite
    .get<IBaseAPIResponse<IGetKriteriaDetailResponse>>(`/api/alternatif/${id}`)
    .then((r) => r.data);
};

export const patchUpdateAlternatifAPI = async (
  body: IUpdateAlternatifRequest,
  id: number
) => {
  return await satellite
    .patch<IBaseAPIResponse>(`/api/alternatif/${id}`, body)
    .then((r) => r.data);
};

export const deleteAlternatifAPI = async (id: number) => {
  return await satellite
    .delete<IBaseAPIResponse>(`/api/alternatif/${id}`)
    .then((r) => r.data);
};
