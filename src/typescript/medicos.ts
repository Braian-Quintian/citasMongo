import { Expose } from 'class-transformer';
import { IsString, IsDefined, IsNotEmpty, ValidateIf, Max } from "class-validator";

export class MedicosG {

    @Expose({ name: 'med_nro_MatriculaProsional' })
    @ValidateIf(o => o["medico-id"] !== undefined)
    @IsNotEmpty({ message: 'The medico-id cannot be empty' })
    @IsDefined({ message: () => { throw { status: 422, message: "The medico-id is required" } } })
    @IsString({ message: () => { throw { status: 406, message: "The medico-id must be a string" } } })
    ["medico-id"]: string

    @Expose({ name: 'med_nombreCompleto' })
    @ValidateIf(o => o["medico-nombre"] !== undefined)
    @IsNotEmpty({ message: 'The medico-nombre cannot be empty' })
    @IsDefined({ message: () => { throw { status: 422, message: "The medico-nombre is required" } } })
    @IsString({ message: () => { throw { status: 406, message: "The medico-nombre must be a string" } } })
    ["medico-nombre"]: string

    @Expose({ name: 'med_especialidad' })
    @ValidateIf(o => o["medico-especialidad"] !== undefined)
    @IsNotEmpty({ message: 'The medico-especialidad cannot be empty' })
    @IsDefined({ message: () => { throw { status: 422, message: "The medico-especialidad is required" } } })
    @IsString({ message: () => { throw { status: 406, message: "The medico-especialidad must be a string" } } })
    ["medico-especialidad"]: string

    @Expose({ name: 'med_consultorio' })
    @ValidateIf(o => o["medico-consultorio"] !== undefined)
    @IsNotEmpty({ message: 'The medico-consultorio cannot be empty' })
    @IsDefined({ message: () => { throw { status: 422, message: "The medico-consultorio is required" } } })
    @IsString({ message: () => { throw { status: 406, message: "The medico-consultorio must be a string" } } })
    ["medico-consultorio"]: string

    constructor(data: Partial<MedicosG>){Object.assign(this, data)}
}

export class MedicosP {

    @Expose({ name: "medico-especialidad" })
    @IsNotEmpty({ message: 'The medico-especialidad cannot be empty' })
    @IsDefined({ message: () => { throw { status: 422, message: "The medico-especialidad is required" } } })
    @IsString({ message: () => { throw { status: 406, message: "The medico-especialidad must be a string" } } })
    medico_especialidad: string

    constructor(data: Partial<MedicosP>){Object.assign(this, data)}
}