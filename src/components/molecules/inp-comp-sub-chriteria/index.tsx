import { IInpCompSubChriteriaParams } from "@/interfaces/components/inp-create-sub-chriteria/index.interface";
import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const InpCompSubChriteria: React.FC<IInpCompSubChriteriaParams> = ({
    data: { id, sub_kriteria1_id, sub_kriteria2_id, nilai_perbandingan },
    dataSubKriteria,
    register,
    i,
    onValueChange,
    disableAll = false,
}) => {
    return (
        <div className="mt-3">
            <div className="flex gap-2 items-center mb-1">
                <h2 className="text-xl font-semibold">Sub Kriteria {i + 1}</h2>
                {/* <IconButton
                    className="space-x-1"
                    type="button"
                    color="error"
                    disabled={disableRemove || disableAll}
                    onClick={() => onRemoveList?.()}
                >
                    <FontAwesomeIcon icon={faEraser} />
                </IconButton> */}
            </div>
            <div className="flex py-1 gap-1">
                <Autocomplete
                    {...register(`perbandingan.${i}.sub_kriteria1_id`)}
                    className="grow"
                    size="small"
                    options={dataSubKriteria?.data ?? []}
                    isOptionEqualToValue={(option, value) =>
                        option.sub_kriteria_id === value.sub_kriteria_id
                    }
                    value={
                        dataSubKriteria?.data?.find(
                            (dk) => dk.sub_kriteria_id === sub_kriteria1_id
                        ) ?? (null as any) // eslint-disable-line
                    }
                    disabled
                    getOptionLabel={(option) =>
                        option?.nama_sub_kriteria ?? "-"
                    }
                    getOptionKey={(opt) =>
                        `${opt?.sub_kriteria_id} - ${opt?.nama_sub_kriteria}`
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Sub Kriteria 1"
                            slotProps={{
                                input: {
                                    ...params.InputProps,
                                    type: "search",
                                },
                            }}
                        />
                    )}
                    onChange={(_, value) => {
                        if (value && value.sub_kriteria_id)
                            onValueChange?.({
                                id,
                                sub_kriteria1_id: value.sub_kriteria_id,
                                sub_kriteria2_id,
                                nilai_perbandingan,
                            });
                    }}
                />
                <Autocomplete
                    {...register(`perbandingan.${i}.sub_kriteria2_id`)}
                    className="grow"
                    size="small"
                    options={dataSubKriteria?.data ?? []}
                    disabled
                    isOptionEqualToValue={(option, value) =>
                        option.sub_kriteria_id === value.sub_kriteria_id
                    }
                    value={
                        dataSubKriteria?.data?.find(
                            (dk) => dk.sub_kriteria_id === sub_kriteria2_id
                        ) ?? (null as any) // eslint-disable-line
                    }
                    getOptionLabel={(option) => option?.nama_sub_kriteria ?? ""}
                    getOptionKey={(opt) =>
                        `${opt?.sub_kriteria_id} - ${opt?.nama_sub_kriteria}`
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Sub Kriteria 2"
                            slotProps={{
                                input: {
                                    ...params.InputProps,
                                    type: "search",
                                },
                            }}
                        />
                    )}
                    onChange={(_, value) => {
                        if (value && value.sub_kriteria_id)
                            onValueChange?.({
                                id,
                                sub_kriteria1_id,
                                sub_kriteria2_id: value.sub_kriteria_id,
                                nilai_perbandingan,
                            });
                    }}
                />
                <TextField
                    size="small"
                    label="Nilai Perbandingan"
                    type="number"
                    disabled={disableAll}
                    key={id}
                    {...register(`perbandingan.${i}.nilai_perbandingan`)}
                />
            </div>
        </div>
    );
};

export default InpCompSubChriteria;
