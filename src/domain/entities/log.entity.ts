
export enum LogSeverityLevel {
  low    = 'low',
  medium = 'medium',
  high   = 'high',
}

export interface LogEntityOptions { 
   level: LogSeverityLevel; // Enum
   message: string;
   origin: string;
   createdAt?: Date;
   
} 

export class LogEntity {

  public level: LogSeverityLevel; // Enum
  public message: string;
  public createdAt: Date;
  public origin: string;

  constructor(options: LogEntityOptions) {
    const { message, level, origin, createdAt = new Date() } = options;
    this.message = message;
    this.level = level;
    this.origin = origin;
    this.createdAt = new Date();
  }

  //"{ "level": "high", "message":"Hola Mundo", "createdAt":"128937TZ12378123" }"
  static fromJson = ( json: string ): LogEntity => {
    const { message, level, createdAt, origin } = JSON.parse(json);
    
    const log = new LogEntity({ 
      message: message, 
      level: level,
      origin:  origin, 
      createdAt: createdAt 
    });
    
    return log;
  }

}
