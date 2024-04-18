import { SendEmailLogs } from '../domain/use-cases/email/send-email-logs';
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { EmailService } from './email/email.service';


const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource(),
);

const emailService = new EmailService();

export class Server {

  public static start() {

    console.log( 'Server started...' );

    // Mandar email


    //POR MEDIO DE UN CASO DE USO. 
    
    // new SendEmailLogs(
    //   emailService,
    //   fileSystemLogRepository,
    // ).execute(
    //   ['rafaelg21@gmail.com', 'rafaelg21.doc@gmail.com']
    // )

    //
    /*emailService.sendEmail({
      to: 'rafaelg21@gmail.com',
      subject: 'Logs de Sistema',
      htmlBody: `
      <h3> Logs de Sistema - NOC </h3>

      <p> Lorem  impsu valid </p>

      `
    });*/

    // emailService.sendEmailWithFileSystemLogs(
    //   ['rafaelg21@gmail.com', 'rafaelg21.doc@gmail.com'],
    //  );
    
    
    // CronService.createJob(
    //   '*/5 * * * * *',
    //   () => {
    //     const url = 'https://google.com';
    //     new CheckService(
    //       fileSystemLogRepository,
    //       () => console.log( `${ url } is ok` ),
    //       ( error ) => console.log( error ),
    //     ).execute( url );
    //     // new CheckService().execute( 'http://localhost:3000' );
        
    //   }
    // );


  }


}


