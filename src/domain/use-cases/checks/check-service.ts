import { LogEntity, LogSeverityLevel } from '../../entities/log.entity';
import { LogRepository } from '../../repository/log.repository';

interface CheckServiceUseCase {
  execute( url: string ):Promise<boolean>;
}


type SuccessCallback = (() => void) | undefined;
type ErrorCallback = (( error: string ) => void) | undefined;




export class CheckService implements CheckServiceUseCase {

  constructor(
    private readonly logRepository: LogRepository,
    private readonly successCallback: SuccessCallback,
    private readonly errorCallback: ErrorCallback
  ) {}


  public async execute( url: string ): Promise<boolean> {
    const options = {
      level: LogSeverityLevel.low, 
      message: `Service ${ url } working`,
      origin: 'check-service.ts'
    }

    try {
      const req = await fetch( url );
      if ( !req.ok ) {
        throw new Error( `Error on check service ${ url }` );
      }

      const log = new LogEntity(options);
      this.logRepository.saveLog( log );
      this.successCallback && this.successCallback();

      return true;
    } catch (error) {
      options.message = `${url} is not ok. ${ error }`;
      options.level   = LogSeverityLevel.high;
      const log = new LogEntity(options);
      this.logRepository.saveLog(log);
      
      this.errorCallback && this.errorCallback( options.message );

      return false;
    }

  }

}

