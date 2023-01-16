<template>
	<div class="listBtn align-end my-3">
		<div class="form-group mt-2">
			<label for="" class="d-flex align-center">Disk Container Format {{typeof lines}}</label>
			<NCAdditionalToggles v-model="lines" :items="listLines" label="value" value="value" count="source"/>
		</div>
		<v-btn density="default" class="my-4 ms-2" variant="outlined">
			<v-img src="/images/general/restart.svg"></v-img>
			Refresh session
		</v-btn>
	</div>
	<v-card variant="flat" class="systemLogs bg-grey-200 pa-5">
		<p v-for="(log, idx) in logs.slice(0, lines)" :key="idx">{{log}}</p>
	</v-card>
</template>

<script>
	import NCAdditionalToggles from "@/components/additional/NCAdditionalToggles";
	export default {
		data(){
			return{
				lines: 30,
				listLines: [
					{value: 5},
					{value: 30},
					{value: 100},
					{value: 500},
					{value: 1000}
				],
				logs: [
					'[[0;32m  OK  [0m] Finished [0;1;39mWait until snapd is fully seeded[0m.\n',
					'Starting [0;1;39mApply the settings specified in cloud-config[0m...\n',
					'[[0;32m  OK  [0m] Reached target [0;1;39mMulti-User System[0m.\n',
					'[[0;32m  OK  [0m] Reached target [0;1;39mGraphical Interface[0m.\n',
					'Starting [0;1;39mUpdate UTMP about System Runlevel Changes[0m...\n',
					'[[0;32m  OK  [0m] Finished [0;1;39mUpdate UTMP about System Runlevel Changes[0m.\n',
					'[  484.893107] cloud-init[1278]: Cloud-init v. 21.4-0ubuntu1~20.04.1 running \'modules:config\' at Mon, 06 Jun 2022 18:45:07 +0000. Up 483.82 seconds.\n',
					'[[0;32m  OK  [0m] Finished [0;1;39mApply the settings specified in cloud-config[0m.\n',
					'Starting [0;1;39mExecute cloud user/final scripts[0m...\n',
					'Starting [0;1;39mExecute cloud user/final scripts[0m...\n',
					'<14>Jun  6 18:45:09 cloud-init: #############################################################\n',
					'<14>Jun  6 18:45:09 cloud-init: -----BEGIN SSH HOST KEY FINGERPRINTS-----\n',
					'<14>Jun  6 18:45:09 cloud-init: 1024 SHA256:o3gedrMaNq7w6HDy41X66fNR5Z8fif6VCxWqdU+5H8M root@ubuntu (DSA)\n',
					'<14>Jun  6 18:45:09 cloud-init: 256 SHA256:3qOMJniYF7tVp/EOQr9OyR7ZMIcleVQzFdZPMtvGPfs root@ubuntu (ECDSA)\n',
					'<14>Jun  6 18:45:09 cloud-init: 256 SHA256:NMko9CMgktexCh2OizZo9PCLrBTniuHKlPpCQSRVJZo root@ubuntu (ED25519)\n',
					'<14>Jun  6 18:45:09 cloud-init: 3072 SHA256:xD1CJg0OJoFdCyVAgkwlt/AhDbbbDYVIxhmLibrQ9JM root@ubuntu (RSA)\n',
					'<14>Jun  6 18:45:09 cloud-init: -----END SSH HOST KEY FINGERPRINTS-----\n',
					'<14>Jun  6 18:45:09 cloud-init: #############################################################\n',
					'-----BEGIN SSH HOST KEY KEYS-----\n',
					'ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBPL5MBfWqYdWMMUXnoWblmOEV29EbfbspY8p+Gl8k2gbsnugi/Vs3mEJGrO8gdqrZUj',
					'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAICiLMffsF5q5zYQWQZlVtaWrMVUqI/vIixYCFirxPXPR root@ubuntu\n',
					'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDCimUOQQ8R5HQKcqlznbCF8ittXaevVFYGKEC6R8fsp6CqWrQAgD3R/F/oL5v/sLeR5FSGizKNlCNrgHj00lIGw1IIzCIYDPGC7+RVYLfea',
					'-----END SSH HOST KEY KEYS-----\n',
					'[  485.779608] cloud-init[1292]: Cloud-init v. 21.4-0ubuntu1~20.04.1 running \'modules:final\' at Mon, 06 Jun 2022 18:45:09 +0000. Up 485.48 seconds.\n[  485.779608] cloud-init[1292]: Cloud-init v. 21.4-0ubuntu1~20.04.1 running \'modules:final\' at Mon, 06 Jun 2022 18:45:09 +0000. Up 485.48 seconds.\n',
					'[  485.782336] cloud-init[1292]: ci-info: no authorized SSH keys fingerprints found for user ubuntu.\n',
					'[  485.788160] cloud-init[1292]: Cloud-init v. 21.4-0ubuntu1~20.04.1 finished at Mon, 06 Jun 2022 18:45:09 +0000. Datasource DataSourceNone.  Up 485.77 seconds\n',
					'[  485.794920] cloud-init[1292]: 2022-06-06 18:45:09,780 - cc_final_message.py[WARNING]: Used fallback datasource\n',
					'[[0;32m  OK  [0m] Finished [0;1;39mExecute cloud user/final scripts[0m.\n',
					'[[0;32m  OK  [0m] Reached target [0;1;39mCloud-init target[0m.',
					'<14>Jun  6 18:45:09 cloud-init: #############################################################\n',
					'<14>Jun  6 18:45:09 cloud-init: -----BEGIN SSH HOST KEY FINGERPRINTS-----\n',
					'<14>Jun  6 18:45:09 cloud-init: 1024 SHA256:o3gedrMaNq7w6HDy41X66fNR5Z8fif6VCxWqdU+5H8M root@ubuntu (DSA)\n',
					'<14>Jun  6 18:45:09 cloud-init: 256 SHA256:3qOMJniYF7tVp/EOQr9OyR7ZMIcleVQzFdZPMtvGPfs root@ubuntu (ECDSA)\n',
					'<14>Jun  6 18:45:09 cloud-init: 256 SHA256:NMko9CMgktexCh2OizZo9PCLrBTniuHKlPpCQSRVJZo root@ubuntu (ED25519)\n',
					'<14>Jun  6 18:45:09 cloud-init: 3072 SHA256:xD1CJg0OJoFdCyVAgkwlt/AhDbbbDYVIxhmLibrQ9JM root@ubuntu (RSA)\n',
					'<14>Jun  6 18:45:09 cloud-init: -----END SSH HOST KEY FINGERPRINTS-----\n',
					'<14>Jun  6 18:45:09 cloud-init: #############################################################\n',
				]
			}
		},
		components: {
			NCAdditionalToggles
		}
	}
</script>

<style>
	.listBtn{
		display: flex;
		margin-bottom: 10px;
	}
	.systemLogs{
		max-width: 100%;
		max-height: 100%;
		overflow: auto;
		height: fit-content;
	}
	.systemLogs p{
		white-space: nowrap;
	}
</style>